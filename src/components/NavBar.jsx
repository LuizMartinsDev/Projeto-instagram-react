import styles from '../css/NavBar.module.css';
import logo from '../assets/logo.png';
import logoIcon from '../assets/icones/logo-instagram 1.png';
import paperPlaneIcon from '../assets/icones/paper-plane-outline 1.png';
import compassIcon from '../assets/icones/compass-outline 1.png';
import heartIcon from '../assets/icones/heart-outline 1.png';
import personIcon from '../assets/icones/person-outline 1.png';
import rectangle from '../assets/Rectangle 4.png'

const NavBar = () => {
    return(
        <header>
            <nav className={styles.navBar}>
                <div className={styles.containerLogo}>
                 <img src={logoIcon} alt="logo com o icone do instagram" />
                 <img src={rectangle} />
                 <img src={logo} alt="logo com o nome do instagram" />
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder='Pesquisar' />
                </div>
                <div className={styles.icons}>
                    <img src={paperPlaneIcon} alt="icone de uma seta" />
                    <img src={compassIcon} alt="icone de uma bússola" />
                    <img src={heartIcon} alt="icone de um coração" />
                    <img src={personIcon} alt="icone de uma pessoa" />
                </div>
            </nav>
        </header>
    )
}
export default NavBar;