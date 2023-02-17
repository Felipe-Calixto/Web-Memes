import styles from "./CreatePost.module.css";

//Icons
import { ImTextWidth } from "react-icons/im"
import { AiFillTags } from "react-icons/ai"
import { useState, useEffect } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../Context/AuthContext"
import { AiOutlineFileImage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [checkImg, setCheckImg] = useState(false);

  const { user } = useAuthValue()

  const {insertDocument, response} = useInsertDocument("posts");

  const navigate = useNavigate();

  const imgCheck = (image) => {

    const img = new Image();
    img.src = image;

    return new Promise((resolve) => {
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    })
  }

  useEffect(() => {
    
    imgCheck(image).then((check) => setCheckImg(check))

  }, [image])
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
    
    
    insertDocument ({
      image,
      text, 
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

    navigate("/");
    
  }



  return (
    <div>
      <div className={styles.conteiner}>
        <div className={styles.imgConteiner}>
          {checkImg ? <img src={image} className={styles.img}/> : <p><AiOutlineFileImage/></p>}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Nova Publicação</h1>
          <label className={styles.iconUrl}>URL</label>
          <input type="url" className={styles.input} placeholder="| Digite o url da imagem" required onChange={(e) => setImage(e.target.value)}/>
          <label className={styles.iconText}><ImTextWidth/></label>
          <input type="text" className={styles.input} placeholder="| Escreva uma legenda" required onChange={(e) => setText(e.target.value)}/>
          <label className={styles.iconTag}><AiFillTags/></label>
          <input type="text" className={styles.input} placeholder="| Animais, fofos, legais..." required onChange={(e) => setTags(e.target.value)}/>
          <button>Publicar</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost