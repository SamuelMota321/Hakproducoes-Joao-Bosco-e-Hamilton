import styles from "./styles.module.css"

export const Highlight = ({ title }) => {
    return (
        <section className={styles.highlight}>
            <h1 className="title lg center blackItalic">{title}</h1>
        </section>
    )
}