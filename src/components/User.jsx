
import { useState } from 'react'
import fill from '../assets/icones/Subtract.png'
import styles from '../css/User.module.css'
const User = () => {

    const [editName, setEditName] = useState('');
    const [editImg, setEditImg] = useState('');

    const handleEditName = () => {
        const newName = prompt("Digite o novo nome")
        setEditName(newName)
    }

    const handleEditImg = () => {
        const newImg = prompt("Adicione a url da foto");
        setEditImg(newImg);
    }

    const nameUser = editName ? editName : "Adicione seu nome";
    const imgUser = editImg ? editImg : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lUXoW_2yUPKkKpFEVGM04gsRowd0vCyXew&s"

    return(
        <section className={styles.containerUser}> 
            <img onClick={handleEditImg} className={styles.fotoPerfil}  src={imgUser} alt="Foto de perfil" />
            <strong className={styles.nomeUser}>{nameUser}</strong>
            <img onClick={handleEditName} className={styles.iconFill} src={fill} alt="icone de um lápis para editar informações do usuário" />
        </section>
    )
}
export default User;