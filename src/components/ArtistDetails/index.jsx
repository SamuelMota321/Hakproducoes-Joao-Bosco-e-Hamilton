import JoaoBosco from "../../assets/imgs/joao-bosco.png"
import Hamilton from "../../assets/imgs/hamilton.png"
import styles from './styles.module.css'
import { Button } from "../Button"

export const ArtistDetails = () => {
    return (
        <section>
            <div className={`${styles.artistDiv}`}>
                <p className={`${styles.textJoao} paragraph`}>
                    A magia do violão mouro de <span className="bold">João Bosco</span> executando
                    clássicos atemporais e <span className="bold">composições originais</span> que
                    fazem parte da <span className="bold">história da Música Popular Brasileira</span>,
                    se unem ao <span className="bold">virtuosismo</span> do bandolinista <span className="bold">Hamilton de
                        Holanda</span>, prometendo uma fusão única de sons,
                    emoções e bons momentos.
                </p>
                <div className={styles.joao}>
                    <img src={JoaoBosco} alt="João Bosco tocando violão" />
                </div>
            </div>
            <div className={`${styles.artistDiv} ${styles.hamiltonDiv}`}>
                <div className={styles.hamilton}>
                    <img src={Hamilton} alt="Hamilton de Holanda" />
                </div>
                <div className={styles.textDiv}>
                    <p className={`${styles.text} paragraph`}>
                        Tudo isso no <span className="bold">Espaço Nobre da AABB</span>, cuidadosamente
                        criado para lhe proporcionar <span className="bold">conforto e satisfação.</span>
                        Com ambientes setorizados: <span className="bold">MESAS NUMERADAS
                            (com atendimento de garçons e combos);
                            CAMAROTE OPEN BAR PREMIUM - com espaço
                            e visão privilegiada do palco </span>- ambos
                        os setores com <span className="bold">vaga no estacionamento </span>
                        incluso e gratuito.
                    </p>
                    <Button className="btn" text={"INGRESSOS LIMITADOS"} />
                </div>
            </div>
            <div className={`${styles.titleDiv} container`}>
                <h1 className="title md center">Além de Setores <span className="bold">Camarote</span> e <span className="bold">Pista! </span></h1>
                <p className="paragraph center">Quer mais? Espaço  <span className="bold">Camarote-Louge, bares nos dois pisos, varandas </span>com vista para o Lago Paranoá, <span className="bold">Espaço Gourmet</span> com queijos, vinhos, drinks e cafeteria.</p>
            </div>
        </section>
    )
}