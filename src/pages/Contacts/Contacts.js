import React, {Fragment}  from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Contacts.scss";
import Header from  '../../components/Header';
import Footer from  '../../components/Footer';
import Map from './components/Map';
import config from '../../config';

const ContactsContainer = ({
  data,
  modal,
  openModal,
}) => (
  <Fragment>
   <Header />
      <div className={s.mainImage}>
        <div className={s.container}>
          <span>Contacte</span>
        </div>
      </div>
    <main className={s.contacts}>
      <section className={s.firstSection}>
      <div className={s.map}>
        <Map
          containerElement={<div style={{height: '100%', cursor: 'pointer'}}/>}
          mapElement={<div style={{height: '100%', cursor: 'pointer'}}/>}
          loadingElement={<div />}
          googleMapURL={config.googleMapsApiV3Url}
        />
      </div>
      <div className={s.info}>
        <span>Acasa la mama se afla in partea noridca a centrului Chisinaului</span>

        <address>
          Adresa: Strada Petru Rareș 59, Chișinău <br />
          <span>MD - 2075</span>
        </address>

        <span className={s.rezervatii}>Rezervatii</span> <br />
        <hr />
        <div className={s.mob}>
          <i class="material-icons">local_phone</i>
          <span className={s.number}>+373 78 965423</span>
        </div>
      </div>
    </section>

    <section className={s.partners}>
        <div className={s.item}>
          <h2>Bisquit</h2>
          <hr />
          <p>Type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum </p>
        </div>

      <div className={s.item}>
        <h2>Gok - Oguz</h2>
        <hr />
        <p>Type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum </p>
      </div>
    </section>
    </main>
    <Footer />
  </Fragment>
);

export default withStyles(s)(ContactsContainer);
