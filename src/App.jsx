import Header from './components/Header/index'
import Banner from './components/Banner/index'
import CountdownTimer from './components/CountdownTimer/index'
import MagicNigth from './components/MagicNigth/index'
import VideoSection from './components/VideoSection/index'
import { OtherSectors, Sectors } from './components/Sectors/index'
import Footer from './components/Footer/index'
import { ArtistDetails } from './components/ArtistDetails'
import { EventDetails } from './components/EventDetails'
import bgImg from './assets/imgs/fundo-dourado.png'
import './styles/index.css'
import { Highlight } from './components/Highlight'
import { MenuOpenbar } from './components/MenuOpenBar'
import EventMap from './components/EventMap'




function App() {

  return (
    <>
      <Header />
      <Banner />
      <CountdownTimer />
      <VideoSection />
      <MagicNigth />
      <ArtistDetails />
      <Highlight title=" INGRESSOS, SETORES E AMBIENTES DO EVENTO!" />
      <EventDetails
        title="MESAS PREMIUM E GOLD"
        detailsList={[
          <p>Espaço reservado e confortável em área frontal ao palco, com mesas e cadeiras, <span className='bold'>vista privilegiada</span> e proximidade do palco.</p>,
          <p>O valor de cada <span className='bold'>mesa</span> dá acesso a <span className='bold'>4 pessoas.</span></p>,
          <p>Este ingresso dá direito a <span className='bold'>01 (uma) vaga no estacionamento</span> interno da AABB, gerando maior segurança e permitindo se ficar a poucos metros da entrada do salão do evento.</p>,
          <p>Este setor terá <span className='bold'>atendimento de garçons</span> e acesso lateral a <span className='bold'>bares</span> de atendimento.</p>,
          <p>Este setor também permite a aquisição antecipada de <span className='bold'>combos de bebidas</span> variadas através do site da bilheteria digital. Ou seja, antecipadamente você já poderá escolher o que consumirá.</p>,
          <p>Este ingresso permite ainda o <span className='bold'>trânsito pelos setores pista, camarote, varandas e ilhas de queijos e vinhos</span></p>
        ]}
        button={true}
        buttonText="INGRESSOS ILIMITADOS"
        bgImg={bgImg}
      />

      <Sectors />

      <EventDetails
        title="CAMAROTE OPEN BAR PREMIUM"
        detailsList={[
          <p>Espaço reservado, confortável e elevado em <span className='bold'>área superior e lateral ao palco,</span> com <span className='bold'>bistrôs e cadeiras, e proximidade do palco.</span></p>,
          <p>O ingresso deste setor é <span className='bold'>individual</span> e dá direito ao consumo em <span className='bold'>open bar premium</span> de <span className='bold'>20h30</span> do dia 29/6 a <span className='bold'>1h</span> do dia 30/6, horário de encerramento do evento.</p>,
          <p>Este ingresso dá direito a 01 (uma) vaga no estacionamento interno da AABB, gerando maior segurança e permitindo se ficar a poucos metros da entrada do salão do evento.</p>,
          <p>Esse setor terá atendimento por bar lateral ao espaço.</p>,
          <p>Este ingresso permite ainda o trânsito pelos setores pista, camarote, varandas e ilhas de queijos e vinhos.</p>
        ]}
        bgImg={bgImg}
        rotatebg={true}
      />

      <MenuOpenbar />

      <EventDetails
        title="CAMAROTE INDIVIDUAL"
        detailsList={[
          <p><span className='bold'>Espaço elevado</span> situado no segundo piso do salão, com visões e posicionamentos laterais e frontais ao palco.</p>,
          <p>Este ingresso é<span className='bold'> individual.</span></p>,
          <p>Este setor também dá acesso ao <span className='bold'>camarote lounge</span> com tela e imagem do palco, puffs e sofás, assim como ao terraço do salão.</p>,
          <p>Este ingresso permite ainda o trânsito pelos setores <span className='bold'>pista, camarote, varandas</span> com vista do Lago Paranoá, <span className='bold'>ilhas de queijos e vinhos</span> e aos <span className='bold'>bares</span> do evento.</p>
        ]}
        button={true}
        buttonText="EU ESCOLHO ESTE"
        btnClass="flexEnd"
      />

      <EventDetails
        title="PISTA"
        detailsList={[
          <p>Espaço situado no <span className='bold'>piso inferior do salão</span>, com visões e posicionamentos laterais e frontais ao palco.</p>,
          <p>Este ingresso é <span className='bold'>individual.</span></p>,
          <p>Este ingresso permite ainda o trânsito pelas <span className='bold'>varandas</span> com vista do lago paranoá, ilhas de queijos e vinhos e aos bares do evento.</p>
        ]}
        button={true}
        buttonText="Compre AGORA"
        btnClass="flexStart"
      />

      <OtherSectors/>
      <EventMap/>

      <Highlight title="GARANTA SEU LUGAR NESTE ESPETÁCULO IMPERDÍVEL E DEIXE-SE LEVAR PELA CADÊNCIA IRRESISTÍVEL DO RITMO QUE FAZ PARTE DO DNA CULTURAL DO NOSSO PAÍS." />

      <Footer />

    </>
  )
}

export default App
