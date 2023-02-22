import styles from "./Search.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"
import { useNavigate } from "react-router-dom";

import PostDetail from "../../components/PostDetail";

const Search = () => {
    
    const query = useQuery();
    const search = query.get("q")
    
    const {documents: posts} = useFetchDocuments("posts", search) 

    const navigate = useNavigate();

  const navigateToHome = () => {

    navigate("/");
  }

    return (
        <div className={styles.conteiner}>
            <div className={styles.postsConteiner}>
                {posts && posts.length === 0 && (
                    <>
                    <div className={styles.returnHome}>
                        <p>Não foram encontradas publicações</p>
                        <button onClick={navigateToHome}>Voltar para Home</button>
                    </div>
                    </>
                )}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
                {posts && (
                    <>
                        <div>
                            <button>Voltar</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Search