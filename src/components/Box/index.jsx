import styles from './styles.module.css'

const Box = () => {
    return (
        <section className={`${styles.boxSection} `}>
            <h2 className="title md center">Camarotes</h2>
            <div className={styles.boxTxt}>
                <div>
                    <h3 className="title sm">Camarote</h3>
                    <p className="paragraphy ">Lorem ipsum dolor sit amet consectetur. Donec ac egestas vitae sagittis blandit aliquam adipiscing faucibus nibh. At neque cursus.</p>
                    <ul className={styles.boxList}>
                        <li className="paragraphy">Facilidade 1</li>
                        <li className="paragraphy">Facilidade 2</li>
                        <li className="paragraphy">Facilidade 3</li>
                        <li className="paragraphy">Facilidade 4</li>
                    </ul>
                </div>
                <div>
                    <h3 className="title sm start">Camarote open bar premium</h3>
                    <p className="paragraphy">Lorem ipsum dolor sit amet consectetur. Donec ac egestas vitae sagittis blandit aliquam adipiscing faucibus nibh. At neque cursus.</p>
                    <ul className={styles.boxList}>
                        <li className="paragraphy">Facilidade 1</li>
                        <li className="paragraphy">Facilidade 2</li>
                        <li className="paragraphy">Facilidade 3</li>
                        <li className="paragraphy">Facilidade 4</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Box