import styles from './styles.module.css';
import { useState } from 'react';
import sectorOne from '../../assets/imgs/setor-um.png'
import sectorTwo from '../../assets/imgs/setor-dois.png'

const SectorsSection = () => {
  const [zoomedImage, setZoomedImage] = useState(null)

  const handleImageClick = (imageName) => {
    setZoomedImage(imageName)
  };

  const handleZoomClose = () => {
    setZoomedImage(null)
  };

  return (
    <section className={styles.sectors}>
      <h2 className={`${styles.title} title lg center`}>Setores</h2>
      <h2 className='title md center'>Clique em uma imagem para dar ZOOM</h2>
     
      <div className={styles.sectorImg}>
        <img
          src={sectorOne}
          alt="Setor Um"
          onClick={() => handleImageClick(sectorOne)}
        />
        <img
          src={sectorTwo}
          alt="Setor Dois"
          onClick={() => handleImageClick(sectorTwo)}
        />
      </div>

      {zoomedImage && (
        <div className={styles.imgModal} onClick={handleZoomClose} role='dialog'>
          <div className={styles.imgModalBox}>
            <img
              src={zoomedImage}
              alt={zoomedImage}
             
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default SectorsSection
