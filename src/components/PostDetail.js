import styles from "./PostDetail.module.css"

const PostDetail = ({post}) => {
  return (
    <div className={styles.conteiner}>
        <h2 className={styles.name}>{post.createdBy}</h2>
        <img src={post.image} className={styles.img}/>
        <p className={styles.text}>{post.text}</p>
        <div className={styles.tagsConteiner}>
          {post.tagsArray.map((tag) => (
            <p key={tag}><span>#</span>{tag}</p>
          ))}
        </div>
    </div>
  )
}

export default PostDetail