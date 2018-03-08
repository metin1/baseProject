import React, {Fragment}  from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Events.scss";
import Header from  '../../components/Header';
import Footer from  '../../components/Footer';
import Modal from  '../../components/Modal/Modal';

const Events = ({
  data,
  modal,
  openModal,
}) => (
  <Fragment>
   <Header />
      <div className={s.mainImage}>
        <div className={s.container}>
          <span>Evenimente</span>
        </div>
      </div>
    <section className={s.events}>
      {
        (data &&(
          <Fragment>
          {
            data.map(data => (
              <Fragment key={data.id}>
                <div className={s.event}>
                  <div className={s.images} onClick={openModal}>
                    <img src={data.img} alt={data.title} />
                  </div>
                  <span className={s.name}> {data.title} </span> <br />
                  <span className={s.date}> {data.time} </span>
                </div>
              </Fragment>
              )
            )
          }
      </Fragment>
        )) || (
          'La moment nu sunt evenimente'
        )
      }
      {
        modal &&(
          <Modal>
            <div className={s.modal}>
              <button onClick={openModal}>Hide modal</button>
            </div>
          </Modal>
        )
      }
    </section>
    <Footer />
  </Fragment>
);

export default withStyles(s)(Events);
