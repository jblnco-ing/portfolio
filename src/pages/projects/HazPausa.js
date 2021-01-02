import React, { Component } from 'react';
import { CardProject } from '../../components/common/CardProject';
import Layout from '../../components/layouts/Layout';
import "../../styles/page.css";
import * as img from '../../assets/img/projects/haz_pausa/';

export default class HazPausa extends Component {
  state = {
    data: {
      title: "HazPausa",
		description: "App Mobile",
      styles: {
        backgroundImage: `url(${img.logo})`,
        backgroundColor: "#F0F8FF",
      },
    }
  };

  render() {
    return (
      <Layout>
        <div id="page">
          <CardProject {...this.state.data} />
          <p >
            Haz pausa es un lector de 
            <a href="https://es.wikipedia.org/wiki/Código_QR"> 
              &nbsp;QR&nbsp;
            </a>
            que sirve a la vez como álbum de colección, es un proyecto que estamos llevando mi pareja y yo, en donde ella es la diseñadora y yo quien desarrolla la plataforma.
          </p>
          <img alt="imagen" src={img.imagen1}/>
          <p>
            La app permite guardar y visualizar en cualquier momento y sin conexión a internet, el arte que se oculta en los QR artísticos que intervienen el espacio público del 
            <a href="https://es.wikipedia.org/wiki/Metro_de_Caracas"> 
              &nbsp;metro de Caracas
            </a>
             .
          </p>
          <img alt="imagen" src={img.imagen2}/>
          <p>
            Haz pausa es un proyecto artístico que pretende incidir simbólicamente en la apreciación de las personas sobre su propio recorrido. transformando la rutina e incitando a una experiencia lúdica.
          </p>
          <img alt="imagen" src={img.imagen3}/>
          <p>
            Es la segunda app que desarrollo para 
            <a href="https://es.wikipedia.org/wiki/Android"> 
              &nbsp;Android&nbsp;
            </a>            
             y el primer proyecto que trabajo con código 
            <a href="https://es.wikipedia.org/wiki/Código_QR"> 
              QR
            </a>
            .
          </p>
          <p>
            Escaneo de Qr
          </p>
          <img alt="imagen" src={img.imagen4}/>
          <p>
            Lo desarrolle con la plataforma 
            <a href="https://expo.io"> 
              &nbsp;Expo&nbsp;
            </a>
            en un principio, pero este me presento problemas al subirlo a la 
            <a href="https://es.wikipedia.org/wiki/Google_Play"> 
              &nbsp;Playstore
            </a>
            , por lo que decidi hacerlo con 
            <a href="https://es.reactjs.org"> 
              &nbsp;React&nbsp;
            </a>
            de manera nativa.          
          </p>
          <p>
            Escaneo de qr y reproducción de la animacion
          </p>
          <img alt="imagen" src={img.imagen5}/>
          <p>
            Guardado y colección de la animacion
          </p>
          <img alt="imagen" src={img.imagen6}/>
          <p>
            Aunque actualmente aun no hay 
            <a href="https://es.wikipedia.org/wiki/Pegatina"> 
              &nbsp;stickers&nbsp;
            </a>
            en el metro de caracas, la app es totalmente funcional, en espera de su implementación física y su defensa, pues fue creada para la 
            <a href="https://es.wikipedia.org/wiki/Tesis"> 
              &nbsp;tesis&nbsp;
            </a>
            de mi pareja.
          </p>
          <p>
            Animacion de los Qr
          </p>
          <img alt="imagen" src={img.imagen7} />
          <p>
            Logotipos de la app fue hecho por la colaboración de 
            <a href="https://www.instagram.com/dona.intermitente/"> 
              &nbsp;@dona.intermitente
            </a>
          </p>
          <img alt="imagen" src={img.imagen8}/>
        </div>
      </Layout>
    );
  }
}
