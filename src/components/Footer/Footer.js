import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import moment from 'moment';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={s.container}>
          <div className={s.top}>
            <div>
              <span className={s.where}>Unde ne aflam</span>
              <h3>Strada Petru Rareș 59, Chișinău</h3>
            </div>

            <div className={s.right}>
              <span className={s.hours}>Orele de lucru</span>
              <div className={s.time}>
                <div className={s.week}>
                Luni - Duminica <br />
                  10:00 - 23:00
                </div>
                <div>Pentru evenimente<br />
                  24/24
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={s.containerBottom}>
          <div className={s.bottom}>
            <span>Copyright {moment().year()} © Acasa la mama with love by Leanca Valentin</span>
            <span>
              <a>Permissions and Copyright </a> | <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/leancav"> Contact developer</a>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
