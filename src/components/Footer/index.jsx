import footerImg from '../../assets/imgs/footer-img.png'
import correio from '../../assets/imgs/correio.png'
import hplus from '../../assets/imgs/hplus.png'
import hai from '../../assets/imgs/hai.png'
import bancarios from '../../assets/imgs/bancarios.png'
import hak from '../../assets/imgs/hak.png'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerImgDiv}>
        <img src={footerImg} alt="Show de musica" />
      </div>

      <div className={styles.gray}>
        <div className={styles.cart}>
          <p className='paragraph'>Apoio Cultural</p>
          <img  src={correio} alt="" />
        </div>

        <div>
          <p className='paragraph'>Hotel Oficial</p>
          <img src={hplus} alt="" />
        </div>

        <div>
          <p className='paragraph'>Comunicação</p>
          <img src={hai} alt="" />
        </div>

        <div>
          <p className='paragraph'>Parceria</p>
          <img src={bancarios} alt="" />
        </div>

        <div>
          <p className='paragraph'>Realização</p>
          <img src={hak} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer