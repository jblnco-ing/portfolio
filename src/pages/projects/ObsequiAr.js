import React, { Component } from 'react';
import { CardProject } from '../../components/common/CardProject';
import Layout from '../../components/layouts/Layout';
import "../../styles/page.css";
import * as img from '../../assets/img/projects/obsequi_ar';

export default class ObsequiAr extends Component {
  state = {
    data:{}
  };
  componentDidMount() {
    this.setState({
      data: this.props.location.state.props
    });
  }

  render() {
    return (
      <Layout>
        <div id="page">
          <CardProject {...this.state.data} />
          <p>
            Es otra idea de negocio que me dio mi hermano y es en la que estoy trabajando actualmente, consiste en desarrollar 
            <a href="https://es.wikipedia.org/wiki/Realidad_aumentada"> 
              &nbsp;realidad aumentada&nbsp;
            </a>
            en forma de un producto que acompañe 
            <a href="https://www.pinterest.com/jdprincesita/ideas-para-regalos/"> 
              &nbsp;un regalo o arreglos de flores.
            </a>
          </p>
          <img alt="imagen" src={img.imagen1}/>
          <p>
            Primer 
            <a href="https://es.wikipedia.org/wiki/Producto_viable_mínimo"> 
              &nbsp;MPV&nbsp;
            </a>
            del proyecto
          </p>
          <p>
            Con vista de implementarlo a mas productos en el futuro.
          </p>
          <img alt="imagen" src={img.imagen2}/>
          <p>
            Marcadores
          </p>
          <p>
            El problema que queremos solucionar es dar a la persona la posibilidad de enviar por medio de realidad aumentada un mensaje personal a sus seres queridos.
          </p>
          <p>
            Etiqueta con 
            <a href="https://es.wikipedia.org/wiki/Código_QR"> 
              &nbsp;QR&nbsp;
            </a>
            y marcador para ver la realidad aumentada
          </p>
          <img alt="imagen" src={img.imagen3}/>
          <p>
            El mensaje personal puede ser un video, el cual no ocupara mas espacio en el regarlo y no opacara el mismo.
          </p>
          <p>
            Segundo MPV en sociedad con 
            <a href="https://www.instagram.com/houseparty_cl/"> 
              &nbsp;@partyhouse
            </a>
          </p>
          <img alt="imagen" src={img.imagen4}/>
          <p>
            Lo mas complicado fue el poder implementarlo en los diferentes   
            <a href="https://es.wikipedia.org/wiki/Navegador_web"> 
              Browsers
            </a>
            que poseen los teléfonos.
          </p>
          <img alt="imagen" src={img.imagen5}/>
          <p>
            Por lo menos 
            <a href="https://www.apple.com/la/safari/"> 
              &nbsp;safari&nbsp;
            </a>
             fue uno de los browser que me presento problemas de permiso y compatibilidad.
          </p>
          <p>
            Mensaje reproducido en safari
          </p>
          <img alt="imagen" src={img.imagen6}/>
          <p>
            El problema con safari me obligo a pasar el desarrollo de 
            <a href="https://es.reactjs.org"> 
              &nbsp;React&nbsp;
            </a>
            (un framework de mi comodidad) a 
            <a href="https://es.wikipedia.org/wiki/Angular_(framework)"> 
              &nbsp;Angular&nbsp;
            </a>
            (uno al cual no estaba aconstumbrado usar), esto con el fin de avanzar en el Proyecto lo mas rapido possible, Tomandome 15 dias montar un MPV.
          </p>
          <p>
            QR del producto
          </p>
          <img alt="imagen" src={img.imagen7}/>
          <p>
            Cacturando el QR y el marcador desde safari
          </p>
          <img alt="imagen" src={img.imagen8}/>
          <p>
            Instrucciones de la realidad aumentada
          </p>
          <img alt="imagen" src={img.imagen9}/>
          <p>
            Logo del proyecto colaboración de 
            <a href="https://www.instagram.com/dona.intermitente/"> 
              &nbsp;@dona.intermitente
            </a>
          </p>
          <img alt="imagen" src={img.imagen10}/>
        </div>
      </Layout>
    );
  }
}
