import styles from './styles.module.css';

const Highlight = () => {

    return (
        <section className={styles.highlight}>
            <div className={`container`}>
                <h1 className="title lg center">Prepare-se para uma noite MÁGICA!</h1>
                <p className="paragraphy center">Encontre os mestres JOÃO BOSCO E HAMILTON DE HOLANDA no dia 29 de junho, no espaço da Associação Atlética Banco do Brasil (AABB), à partir das 21h. </p>
                <button className="btn">EU QUERO IR</button>
            </div>
        </section>

    )
}

export default Highlight