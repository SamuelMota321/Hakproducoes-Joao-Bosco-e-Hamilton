import { Button } from "../Button"
import arrowIco from '../../assets/icon/arrow-ico.png'
import styles from './styles.module.css'

export const EventDetails = ({ ...rest }) => {
    return (
        <section className={`${styles.eventDetails} container`}>
            <h1 className="title lg flexStart bold">{rest.title}</h1>
            <ul className={styles.flexUl}>
                {rest.detailsList ? rest.detailsList.map((text, i) => (
                    <li key={i} className={`${styles.flexLi} paragraph`}>
                        <img src={arrowIco} />
                        {text}
                    </li>
                )) : null}
            </ul>
            {rest.button ? <Button className={`${rest.btnClass} btn`} text={rest.buttonText} /> : null}
            <div className={`${styles.bgDiv} ${rest.rotatebg ? styles.bgRotate : ""}`}>
                {rest.bgImg ? <img src={rest.bgImg} /> : null}
            </div>
        </section>

    )

}