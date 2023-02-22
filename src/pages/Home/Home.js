import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PostDetail from '../../components/PostDetail';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from "./Home.module.css"

const Home = () => {

  const navigate = useNavigate();

  const navigateToPosts = () => {

    navigate("/posts/create");
  }

  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (query) {
      navigate(`/search?q=${query}`)
    }
  }


  return (
    <div className={styles.conteiner}>
      <div className={styles.formConteiner}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Busque por tags..."/>
          <button><AiOutlineSearch/></button>
        </form>
      </div>
      <div className={styles.postsConteiner}>
        {posts && posts.map((post) => <PostDetail post={post} key={post.id}/>)}
      </div>
      <div className={styles.conteinerCreateNewPost}>
          <p>Não foram encontradas mais publicações</p>
          <button onClick={navigateToPosts}>Criar nova publicação</button>
        </div>
    </div>
  )
}

export default Home