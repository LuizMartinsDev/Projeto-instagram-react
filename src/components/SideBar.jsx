
import User from './User'
import Suggestions from './Suggestions'
import styles from '../css/SideBar.module.css'

const SideBar = () => {
    return(
        <aside>
                <User />
                <Suggestions />
                <p className={styles.sobre}>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma
                </p>
                <p className={styles.direitosReservados}>© 2021 INSTAGRAM DO FACEBOOK</p>
        </aside>
    )
}
export default SideBar;