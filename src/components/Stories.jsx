import nineGag from '../assets/stories/9gag.svg';
import meowed from '../assets/stories/meowed.svg';
import barked from '../assets/stories/barked.svg';
import nathanwpy from '../assets/stories/nathanwpylestrangeplanet.svg';
import wawawicomics from '../assets/stories/wawawicomics.svg';
import respondeai from '../assets/stories/respondeai.svg';
import filomoderna from '../assets/stories/filomoderna.svg';
import memeriagourmet from '../assets/stories/memeriagourmet.svg';
import styles from '../css/Stories.module.css'
const Stories = () => {
    const stories = [
        {image: nineGag , nome: "9gag"},
        {image:  meowed, nome: "meowed"},
        {image:  barked, nome: "barked"},
        {image:  nathanwpy, nome: "nathanwpylestrangeplanet"},
        {image:   wawawicomics, nome: "wawawicomics"},
        {image:  respondeai, nome: "respondeai"},
        {image:  filomoderna, nome: "filomoderna"},
        {image:  memeriagourmet, nome: "memeriagourmet"}
    ]
    return(
        <section className={styles.containerStories}>
            {stories.map((storie, index) => (
                <div className={styles.storie} key={index}>
                    <div className={styles.fundoStories} >
                        <img src={storie.image} />
                    </div>
                    <p className={styles.nomeStories}>{storie.nome}</p>
                </div>
            ))}
        </section>
    )
}
export default Stories;