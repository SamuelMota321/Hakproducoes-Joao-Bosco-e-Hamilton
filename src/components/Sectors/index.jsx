import styles from './styles.module.css';
import camarote from '../../assets/imgs/camarote-premium.png'
import setorMesas from '../../assets/imgs/setor-mesas.png'
import setorMesasPremium from '../../assets/imgs/setor-mesas-premium.png'

export const Sectors = () => {


  return (
    <section className={styles.sectorFlex}>
      <div>
        <img src={camarote} alt="Imagem do Camarote" />
        <p className='paragraph center'>Camarote Open Bar Premium</p>
      </div>

      <div>
        <img src={setorMesas} alt="Setor de Mesas" />
        <p className='paragraph center'>Setor de Mesas Gold </p>
      </div>

      <div>
        <img src={setorMesasPremium} alt="Setor de Mesas Premium" />
        <p className='paragraph center'>Setor de Mesas Premium</p>
      </div>
    </section>
  )
}

export const OtherSectors = () => {
  return (
    <section className='container'>
      <h1 className='title lg center blackItalic'>OUTROS AMBIENTES: </h1>

      <div className={styles.enviroments}>
        <div>
          <h1 className='title lg start bold'>ILHA DE QUEIJOS E VINHOS</h1>
          <p className='paragraph'>
            Espaço situado nos <span className='bold'>pisos inferior e superior</span> do salão,
            com mesas e cadeiras, atendimento de profissionais especializados e <span className='bold'>ótima carta de vinhos </span>
            e <span className='bold'>opções de queijos e quitutes.</span>
          </p>
        </div>

        <div className='flexEnd'>
          <h1 className='title lg end bold' >BARES DO EVENTO</h1>
          <p className='paragraph end'>O evento contará com <span className='bold'>bares</span> de atendimento ao público nos <span className='bold'>pisos inferior e superior.</span></p>
        </div>

        <div>
          <h1 className='title lg start bold'>VARANDAS LATERAIS</h1>
          <p className='paragraph'>O salão do evento conta com <span className='span'>varandas laterais</span> e <span className='bold'>vista privilegiada do Lago Paranoá</span> e estacionamentos da AABB.</p>
        </div>

        <div className='flexEnd'>
          <h1 className='title lg end bold'>CAMAROTE LOUNGE</h1>
          <p className='paragraph end'>Espaço situado no piso superior, ambientado com poltronas e puffs.</p>
        </div>
      </div>

    </section>
  )
}

