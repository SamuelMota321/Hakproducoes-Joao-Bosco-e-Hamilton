import React, { useState } from 'react'
import styles from './styles.module.css'
import videoUrl from '../../assets/videos/video-telao.mp4'
import cover from '../../assets/imgs/capa-video.png'

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }

  return (
    <section className={`container`}>
      <div className={styles.videoContainer}>
        {!showVideo && (
          <div className={styles.videoCover} onClick={handleVideoClick}>
            <img
              className={styles.videoCoverImage}
              src={cover}
              alt="Capa video Hamilton de Holanda e João Bosco"
            />
            <button className={styles.playbtn}></button>
          </div>
        )}
        {showVideo && (
          <video className={styles.video} autoPlay loop controls>
            <source src={videoUrl} type="video/mp4" />
            Seu navegador não suporta esse formato de video
          </video>
        )}
      </div>
    </section>
  )
}

export default VideoSection