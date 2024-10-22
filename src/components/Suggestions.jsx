import styles from '../css/Suggestions.module.css';
import badVibes from '../assets/usersSuggestions/bad.vibes.memes.svg';
import chibirdart from '../assets/usersSuggestions/chibirdart.svg';
import razoesParaAcreditar from '../assets/usersSuggestions/razoesparaacreditar.svg';
import adorableAnimals from '../assets/usersSuggestions/adorable_animals.svg';
import smallCats from '../assets/usersSuggestions/smallcutecats.svg'

const Suggestions = () => {

    const usersSuggestions = [
        {image: badVibes, nome: "bad.vibes.memes", segue: "Segue você"},
        {image: chibirdart, nome: "chibirdart", segue: "Segue você"},
        {image: razoesParaAcreditar, nome: "razoesparaacreditar", segue: "Novo no Instagram"},
        {image: adorableAnimals, nome: "adorable_animals", segue: "Segue você"},
        {image: smallCats, nome: "smallcutecats", segue: "Segue você"}
    ]
    return(
        <section className={styles.containerSuggestions}>
            <div className={styles.suggestionsText}>
                <p>Sugestões para você</p>
                <strong>Ver tudo</strong>
            </div>
            
                {usersSuggestions.map((userSuggestion, index) => (
                    <div key={index} className={styles.suggestionContainerUsers}>
                        <div className={styles.suggestionUsers}>
                            <img src={userSuggestion.image}  />
                            <div>
                                <strong>{userSuggestion.nome}</strong>
                                <p>{userSuggestion.segue}</p>
                            </div>
                        </div>
                        <a href="#">Seguir</a>
                    </div>
                ))}
            
        </section>
    )
}
export default Suggestions;