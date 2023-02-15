import styles from "./CreatePost.module.css";

//Icons
import { ImTextWidth } from "react-icons/im"
import { AiFillTags } from "react-icons/ai"

const CreatePost = () => {
  return (
    <div>
      <div className={styles.conteiner}>
        <div className={styles.img}>

        </div>
        <form className={styles.form}>
          <h1>Nova Puplicação</h1>
          <label className={styles.iconUrl}>URL</label>
          <input type="url" className={styles.input} placeholder="| Digite o url da imagem"/>
          <label className={styles.iconText}><ImTextWidth/></label>
          <input type="text" className={styles.input} placeholder="| Escreva uma legenda"/>
          <label className={styles.iconTag}><AiFillTags/></label>
          <input type="text" className={styles.input} placeholder="| Animais, fofos, legais..."/>
          <button>Publicar</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost