import styles from "./PostsEdit.module.css";
import { useState, useEffect } from "react";
import { useDeleteDocument } from "../hooks/useDeleteDocument";
import Swal from 'sweetalert2'
import { BsFillPencilFill } from 'react-icons/bs';
import { useUpdateDocument } from "../hooks/useUpdateDocument";
import { useParams } from "react-router-dom";
import { useAuthValue } from "../Context/AuthContext";

const PostsEdit = ({post}) => {

    const {deleteDocument} = useDeleteDocument("posts");
    const [text, setText] = useState("");
    const [tags, setTags] = useState("");
    const {updateDocument} = useUpdateDocument("posts");
    const { id } = useParams();
    const { user } = useAuthValue()

    const editDocument = () => {

        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
        
        const data = {
            text, 
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName,   
        }
        
        updateDocument (id, data);

        console.log(data)
      }

    useEffect(() => {
      
        if (post) {
            setText(post.text);

            const textTags = post.tagsArray.join(", ");
            setTags(textTags);
        }

    }, [post])
    

    const confirmDeleteDocument = (post) => {

        Swal.fire({
          title: 'Deletar?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: "Cancelar",
          confirmButtonText: 'Deletar'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteDocument(post.id);
          }
        })
      }


  return (
    <div className={styles.conteiner}>
        <img src={post.image} className={styles.img}/>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <p className={styles.iconPen1}><BsFillPencilFill/></p>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)}/>
        <p className={styles.iconPen2}><BsFillPencilFill/></p>
        <div className={styles.bntConteiner}>
            <button onClick={() => confirmDeleteDocument(post)}>Excluir Postagem</button>
            <button onClick={editDocument}>Confirmar Edição</button>
        </div>
    </div>
  )
}

export default PostsEdit