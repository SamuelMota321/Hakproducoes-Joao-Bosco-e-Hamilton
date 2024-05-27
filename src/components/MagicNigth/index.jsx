import { Button } from '../Button';
import styles from './styles.module.css';

const Highlight = () => {

    return (
        <section className={styles.highlight}>
            <div>
                <h1 className="title lg center blackItalic"> PREPAREM-SE PARA UMA NOITE MÁGICA E MUITO ESPECIAL!</h1>
                <p className={`${styles.paragraph} paragraph center`}>Uma noite de celebração da música brasileira em sua forma mais autêntica e apaixonada. SIM! <span className="bold"> Dia 29/6, na AABB, a partir das 21h</span>, os mestres <span className="bold">JOÃO BOSCO e HAMILTON DE HOLANDA </span>se encontram no contagiante show: EU VOU PRO SAMBA!</p>
            <Button  text='EU QUERO IR' className={'btn'}/>
            </div>
        </section>

    )
}

export default Highlight