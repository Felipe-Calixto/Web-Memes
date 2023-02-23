import styles from "./Dashboard.module.css";

import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostsEdit from "../../components/PostsEdit";

const Dashboard = () => {

  const {user} = useAuthValue();
  const uid = user.uid;

  const {documents: posts,} = useFetchDocuments("posts", null, uid);

  return (
    <div className={styles.conteiner}>
      <h2>DashBoard</h2>
      <p className={styles.description}>Apague ou edite as suas postagens</p>
      <div className={styles.postsConteiner}>
        {posts && posts.map((post) => <PostsEdit post={post} key={post.id}/>)}
      </div>
    </div>
    
  )
}

export default Dashboard