import React  from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Home.scss";
import Header from  '../../components/Header';
import Footer from  '../../components/Footer';
import AboutImage from '../../image/about.png';
import BanquetImage from '../../image/banquet.png';
import Menu from '../../image/menu.png';
import video from '../../image/video.mp4';

const Home = () => (
    <div className={s.root}>
      <Header />
      <section>
        <video autoPlay muted loop id={s.myVideo}>
          <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
      </section>
      <section className={s.secound}>
        <div className={s.about}>
          <div className={s.descriptionAbout}>
            <h2> Despre Noi </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className={s.imageAbout}>
          <img src={AboutImage}
               alt="Despre Acasa la mama"
          />
          </div>
        </div>
        <div className={s.banquet}>
          <div className={s.imageBanquet}>
          <img src={BanquetImage}
               alt="Banchete"
               id={s.banchete}
          />
          </div>
        <div className={s.descriptionBanquet}>
          <h2>Banchete</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <button id={s.rezerva}>
            Rezerva
          </button>
        </div>
        </div>
      </section>

      <section>
        <div className={s.bucatele}>
          <h2>Bucatele Casei</h2>
        </div>

        <div className={s.food}>
          <div className={s.elements}>
            <div className={s.description}>
               <h3>Mititei</h3>
              <p>Cea mai buna salata din Moldova, pentru moldovenii nostri frumosi</p>
              <span>45 Lei</span>
            </div>
           <div className={s.image}>
              <img alt="carne" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/9/11/original-6638-1399647960-6.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
           </div>
            <div className={s.description}>
              <h3>Carne</h3>
              <p>Carne din gaina, cea mai buna gaina din moldova</p>
              <span>55 Lei</span>
            </div>
            <div className={s.image}>
              <img alt="carne" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/9/11/original-6638-1399647960-6.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
            </div>
          </div>
          <div className={s.elements}>
            <div className={s.image}>
              <img alt="carne" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/9/11/original-6638-1399647960-6.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
            </div>
            <div className={s.description}>
              <h3>Salata</h3>
              <p>Cea mai buna salata din Moldova, pentru moldovenii nostri frumosi</p>
              <span>45 Lei</span>
            </div>
            <div className={s.image}>
              <img alt="carne" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/9/11/original-6638-1399647960-6.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
            </div>
            <div className={s.description}>
              <h3>Salata</h3>
              <p>Cea mai buna salata din Moldova, pentru moldovenii nostri frumosi</p>
              <span>45 Lei</span>
            </div>
          </div>
          <div className={s.elements}>
            <div className={s.description}>
              <h3>Zeama</h3>
              <p>Cea mai buna salata din Moldova, pentru moldovenii nostri frumosi</p>
              <span>45 Lei</span>
            </div>
            <div className={s.image}>
              <img alt="carne" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/9/11/original-6638-1399647960-6.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
            </div>
            <div className={s.description}>
              <h3>Carne</h3>
              <p>Carne din gaina, cea mai buna gaina din moldova</p>
              <span>55 Lei</span>
            </div>
            <div className={s.image}>
              <img alt="carne" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr03/9/11/original-6638-1399647960-6.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
            </div>
          </div>
        </div>
      </section>

      <section className={s.menu}>
          <div className={s.content}>
            <div className={s.menuImage}>
              <img src={Menu} alt='menu' />
            </div>
            <div className={s.category}>
              <span>Principale</span>
              <span>Desert</span>
              <span>Bauturi</span>
            </div>
          </div>
      </section>
      <Footer />
    </div>
);

export default withStyles(s)(Home);
