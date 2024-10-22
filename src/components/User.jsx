
import fill from '../assets/icones/Subtract.png'
import styles from '../css/User.module.css'
const User = () => {
    return(
        <section className={styles.containerUser}> 
            <img className={styles.fotoPerfil}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vIE0eD1bEDK1r5u_FcnuBrZ5vAdP7HIDJw&s" alt="Foto de perfil" />
            <strong className={styles.nomeUser}>Luiz Martins</strong>
            <img className={styles.iconFill} src={fill} alt="icone de um lápis" />
        </section>
    )
}
export default User;