import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import VideoBox from './components/VideoBox/VideoBox';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png" 
          nome="João" 
          descricao="Oi, eu sou o João. Estou estudando para aprimorar minhas habilidades"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno imagem={ "https://cdn.pixabay.com/photo/2016/01/10/22/52/letters-1132703_960_720.png" } area={"Email: Teste@teste.teste"}/>
      <CardPequeno imagem={ "https://www.pngitem.com/pimgs/m/9-98936_localization-icons-png-vector-icon-location-png-transparent.png" } area={"Endereço: rua das ruas, a maior rua de todas"}/>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Mundo da xuxa" 
          descricao="Fui no mundo da xuxa uma vez na vida, esperiencia fantastica" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Disco voador" 
        />
        <h2>Habilidades</h2>
      <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/47/47049.png" 
          nome="Capoeira" 
          descricao="Sei imaginar como seria lutar capoeira, sempre me imaginei lutando capoeira, sei imaginar muito bem" 
        />
      </div>
      
      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37qngmaZ7C1tQVA8lc0l7TAUma6As6fgT9Q&usqp=CAU" 
          nome="E. E Academicos da Academia" 
          descricao="Ensino Médio, Ensino Médio Completo" 
        />
      </div>
      
      <div className="page-section-container">
        <h2>Video</h2>
        <VideoBox video={ "https://www.youtube.com/embed/IFavfB4L7Fc" } />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
