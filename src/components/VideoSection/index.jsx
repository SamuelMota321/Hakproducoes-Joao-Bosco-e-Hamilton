import styles from './styles.module.css';

const VideoSection = ({ videoUrl }) => {
  return (
    <section className={`${styles.video} container`}>
      <div className={styles.iframeWrapper}>
        <iframe
          className={styles.iframe}
          src={videoUrl}
          title="Vídeo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <button className="btn">Compre AGORA!</button>
    </section>
  )
}

export default VideoSection;
