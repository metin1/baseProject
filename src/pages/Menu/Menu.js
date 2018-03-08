import React, {Fragment}  from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Menu.scss";
import Header from  '../../components/Header';
import Footer from  '../../components/Footer';

const Menu = ({
  dataMain,
  dataDesert,
  dataDrinks,
  menu,
  onChangeDrinks,
  onChangeDeserts,
  onChangeMain,
}) => (
  <Fragment>
    <Header />
    <div className={s.mainImage}>
      <div className={s.container}>
        <span>Meniul</span>
      </div>
    </div>
    <section className={s.menu}>

      <div className={s.choice}>
        <span onClick={onChangeMain}
              style={menu === 'main' ? {backgroundColor: '#c29b73', color: 'white'} : null}>
          Principale</span>
        <span onClick={onChangeDeserts}
              style={menu === 'deserts' ? {backgroundColor: '#c29b73', color: 'white'} : null}>
          Desert</span>
        <span onClick={onChangeDrinks}
              style={menu === 'drinks' ? {backgroundColor: '#c29b73', color: 'white'} : null}>
          Bauturi</span>
      </div>
      <div className={s.items}>
      {
        menu === 'main' &&(
            <Fragment>
              {
                dataMain.map(data => (
                    <Fragment key={data.id}>
                        <div className={s.itemMenu}>
                          <div className={s.image}>
                            <img src={data.img} alt={data.title}/></div>
                          <div className={s.description}>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <span>{data.price}</span>
                          </div>
                        </div>
                    </Fragment>
                  )
                )
              }
            </Fragment>
        )
      }

      {
        menu === 'deserts' &&(
          <Fragment>
            {
              dataDesert.map(data => (
                  <Fragment key={data.id}>
                    <div className={s.itemMenu}>
                      <div className={s.image}>
                        <img src={data.img} alt={data.title}/></div>
                      <div className={s.description}>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <span>{data.price}</span>
                      </div>
                    </div>
                  </Fragment>
                )
              )
            }
          </Fragment>
        )
      }

      {
        menu === 'drinks' &&(
          <div className={s.drinks}>
            {
              dataDrinks.map(data => (
                  <div key={data.id}>
                      <div className={s.image}>
                        <img src={data.img} alt={data.title} />
                      </div>
                    <div className={s.price}>
                      <h3>{data.title}</h3> <span>{data.price}</span>
                    </div>
                  </div>
                )
              )
            }
          </div>
        )
      }
      </div>
    </section>
    <Footer />
  </Fragment>
);

export default withStyles(s)(Menu);
