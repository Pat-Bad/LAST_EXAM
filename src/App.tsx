
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import { Col, Container, Row } from 'react-bootstrap'
import RadioStation from './components/RadioStation'
import image1a from './assets/assets/images/1a.png';
import image1b from './assets/assets/images/1b.png'
import RadioEpisodes from './components/RadioEpisodes'
import image2a from './assets/assets/images/2a.png'
import image2b from './assets/assets/images/2b.png'
import image2c from './assets/assets/images/2c.png'
import image2d from './assets/assets/images/2d.png'
import image2e from './assets/assets/images/2e.png'
import NewMusic from './components/NewMusic'
import MyButtons from './components/MyButtons'
import MyFooter from './components/MyFooter'
import MusicPlayer from './components/MusicPlayer'
import MyHeader from './components/Myheader'
import BigPlayer from './components/BigPlayer'





function App() {


  return (
    <Container className="fluid bg-dark m-0">
      <Row><Col className="d-none d-md-flex"><MyHeader /></Col><Col xs={12} md={9}>
        <Row><Row className="d-none d-md-flex align-items-center pt-2 "><BigPlayer /></Row><Col className="p-0 d-md-none"><MyNavbar /></Col></Row>
        <Row><h1 className="fw-bold text-light pt-3">Novità</h1><hr className="ms-3 text-secondary"></hr>
          <Row className="align-items-start">
            <Col xs={6} className="mb-4"><RadioStation title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill" src={image1a} /></Col>
            <Col xs={6} className="mb-4"><RadioStation title="Ecco la nuova casa della musica latina" src={image1b} /></Col>
          </Row>
          <Row><span className="d-flex align-items-center"><h5 className="text-light m-0">Nuovi episodi radio</h5> <i className="bi bi-chevron-right text-secondary text-bold ps-2 pt-1"></i></span></Row>
          <RadioEpisodes description="Prólogo con Abuelo" src={image2a} />
          <RadioEpisodes description="The Wanderer" src={image2b} />
          <RadioEpisodes description="Michael Bublé & Carly Pearce" src={image2c} />
          <div className="d-none d-md-flex">
            <RadioEpisodes description="Stephan Moccio: The Zane Lowe Interview" src={image2d} />

            <RadioEpisodes description="Chart Spotlight: Julia Michaels" src={image2e} />
          </div>
        </Row>
        <Row>
          <span className="d-flex align-items-center"><h5 className="text-light m-0">Nuove uscite</h5><i className="bi bi-chevron-right text-secondary text-bold ps-2 pt-1 "></i></span>
          <NewMusic />
        </Row>
        <Row><h5 className="text-light fw-bold">Altro da esplorare</h5></Row>
        <Row><MyButtons description="Esplora per genere" /><MyButtons description="Decenni" /><MyButtons description="Attività e stati d'animo" /><MyButtons description="Worldwide" /><MyButtons description="Classifiche" /><MyButtons description="Audio spaziale" /><MyButtons description="Video musicali" /><MyButtons description="Nuovi artisti" /><MyButtons description="Hit del passato" /></Row>
        <Row className='mb-5 mt-3 bg-dark'>
          <MyFooter />
        </Row>
        <Row className=" d-flex justify-content-center d-md-none"><MusicPlayer /></Row></Col>
      </Row>
    </Container>




  )
}

export default App
