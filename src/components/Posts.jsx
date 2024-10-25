import meowed from '../assets/stories/meowed.svg';
import barked from '../assets/stories/barked.svg';
import gatoTelefone from '../assets/posts/gato-telefone.svg';
import cachorro from '../assets/posts/dog.svg';
import yuyu from '../assets/posts/yu yu hakusho.webp';
import respondeai from '../assets/stories/respondeai.svg';
import adorableAnimals from '../assets/usersSuggestions/adorable_animals.svg';
import paperPlaneIcon from '../assets/icones/paper-plane-outline 1.png';
import heartIcon from '../assets/icones/heart-outline 1.png';
import vector from '../assets/icones/Vector.png';
import vectorSave from '../assets/icones/salvar-instagram.png';
import heartRed from '../assets/icones/coracao.png'
import chat from '../assets/icones/chat.png';
import ellipsis from '../assets/icones/ellipsis-horizontal 1.png'
import styles from '../css/Posts.module.css'
import { useState } from 'react';

const Posts = () => {

    const [activeIndex, setActiveIndex] = useState([]);
    const [activeIndexHeart, setActiveIndexHeart] = useState([])
    const posts = [
        {imageUser: meowed, nomeUser: "meowed", imagePost: gatoTelefone, imageLike: respondeai, userLike: "respondeai",  textoLike: "outras 101523 pessoas", save: vector},
        {imageUser: barked, nomeUser: "barked", imagePost: cachorro, imageLike: adorableAnimals, userLike: "adorable_animals",  textoLike: "outras 99159 pessoas", save: vector},
        {imageUser: meowed, nomeUser: "meowed", imagePost: yuyu, imageLike: respondeai, userLike: "respondeai",  textoLike: "outras 10259 pessoas", save: vector}
    ]


    const handleHeart = (index) => {
        setActiveIndexHeart((prevIndex) => {
            if(prevIndex.includes(index)) {
                return prevIndex.filter(i => i !== index)
            } else {
                return [...prevIndex, index]
            }
        })
    }

    

    const handleSave =(index) => {

        setActiveIndex((prevIndex) => {
            if(prevIndex.includes(index)){
                return prevIndex.filter(i => i !== index)
            } else {
                return[...prevIndex, index]
            }
        })
    }
    return(
        <section className={styles.container}>
            {posts.map((post, index) => (
                <div className={styles.containerPost} key={index}>
                    <div className={styles.containerUser}>
                        <div className={styles.user}>
                            <img src={post.imageUser} alt="foto de perfil" />
                            <strong>{post.nomeUser}</strong>
                        </div>
                        
                        <img src={ellipsis} alt="Imagem de uma ellipsis" />
                    </div>
                    <img className={styles.imgPost} src={post.imagePost} alt="foto da publicação" />
                    <div className={styles.containerIcons}>
                        <div className={styles.icons}>
                            <img className={styles.iconHeart} onClick={() => handleHeart(index)} src={activeIndexHeart.includes(index) ? heartRed : heartIcon} alt="imagem de um icone de coração para like" />
                            <img src={chat} alt="imagem de um icone de comentário" />
                            <img src={paperPlaneIcon} alt="imagem de um icone de seta para compartilhamento" />
                        </div>
                        <img onClick={() => handleSave(index)} className={styles.iconVector} src={activeIndex.includes(index) ? vectorSave : vector} alt="imagem de um icone de vector para salvar o post" />
                    </div>
                    <div className={styles.containerComment}>
                        <img src={post.imageLike} />
                        <p className={post.textLike}>Curtido por <strong>{post.userLike}</strong> e <strong>{post.textoLike}</strong> </p>
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Posts;