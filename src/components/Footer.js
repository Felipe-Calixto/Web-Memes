import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.webmemes}>
            <h3>Desenvolvido por Felipe Calixto</h3>
            <p>WebMemes &copy; 2023</p>
        </div>
        <div className={styles.webmemes}>
            <h3>Contato</h3>
            <p>Email: felipecalixtoribas@gmail.com</p>
            <p>Linkedin: felipecalixto03</p>
        </div>
        <div className={styles.webmemes}>
          <h3>Sobre</h3>
          <p>Este site foi criado para ser uma plataforma de divulgação de memes. E mostra um pouco do meu trabalho como desenvolvedor.</p>
        </div>
    </footer>
  )
}

export default Footer