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
            <ul>
                <li>Email: felipecalixtoribas@gmail.com</li>
                <li>Linkedin: felipecalixto03</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer