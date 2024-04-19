import styles from './styles.module.css';
import BannerImg from '../../assets/imgs/banner.png';
import BannerImgMobile from '../../assets/imgs/banner-mobile.png';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
        <img
          src={window.innerWidth >= 768 ? BannerImg : BannerImgMobile}
          alt="João Bosco e Hamilton tocando juntos"
        />
    </section>
  );
}

export default Banner;
