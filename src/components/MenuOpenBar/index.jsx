import { Button } from "../Button"
import bottle from '../../assets/icon/icon-bar.png'
import bar from '../../assets/imgs/bar.png'
import styles from './styles.module.css'

const menuList1 = [
    "Cerveja Heineken",
    "Whisky 12 anos",
    "Vodka Importada",
    "Gin Importado",
    "Água com gás",
    "Água sem gás",
    "Coca cola",
]

const menuList2 = [
    "Coca cola zero ",
    "Guaraná",
    "Guaraná zero ",
    "Suco de laranja natural ",
    "Água de coco natural ",
    "Água tônica "
]


export const MenuOpenbar = () => {
    return (
        <section className={`${styles.openBar}` }>
            <div className={styles.barDiv}>
                <img src={bar} alt="Imagem do Bar" />
            </div>
            <div className={styles.details}>

                <div className={styles.titleDiv}>
                    <img src={bottle} alt="icone de barrafa" />
                    <h1 className="title sm center bold">CARDÁPIO OPEN BAR PREMIUM:</h1>
                </div>

                <div className={styles.ulDiv}>

                    <ul className={styles.ul}>
                        {menuList1.map((item, i) => (
                            <li key={i} ><p className="paragraph bold">{item}</p></li>
                        ))}
                    </ul>

                    <ul className={styles.ul}>
                        {menuList2.map((item, i) => (
                            <li key={i} ><p className="paragraph bold">{item}</p></li>
                        ))}
                    </ul>
                </div>

                <Button className={`flex End btn`} text={"COMPRE AGORA O SEU INGRESSO"} />
            </div>
        </section>
    )
}