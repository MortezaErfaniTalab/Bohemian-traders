import React from "react";

// assets
import logo from "../../../assets/logo-white.png";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/icons8-facebook-f.svg";
import pinterest from "../../../assets/pinterest-p.svg";
import tiktok from "../../../assets/tiktok.svg";
import down from "../../../assets/chevron-down.svg";

// Styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <ul className={styles.socialUl}>
          <li>
            <a>
              <img
                src={instagram}
                className={styles.instagram}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a>
              <img src={facebook} className={styles.facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a>
              <img
                src={pinterest}
                className={styles.pinterest}
                alt="pinterest"
              />
            </a>
          </li>
          <li>
            <a>
              <img src={tiktok} className={styles.tiktok} alt="tiktok" />
            </a>
          </li>
        </ul>
        <div className={styles.downContainer}>
          <p>INFO</p>
          <img src={down} alt="down" className={styles.down} />
        </div>
        <div className={styles.links}>
          <a>ABOUT US</a>
          <a>CONTACT US</a>
          <a>WORK WITH US</a>
          <a>TS & CS</a>
          <a>PRIVACY POLICY</a>
        </div>
        <div className={styles.downContainer}>
          <p>CUSTOMER CARE</p>
          <img src={down} alt="down" className={styles.down} />
        </div>
        <div className={styles.links}>
          <a>SHIPPING</a>
          <a>RETURNS</a>
          <a>INCLUSIVE SIZING</a>
          <a>PAYMENT METHODS</a>
          <a>GIFT CARDS</a>
          <a>OUTLET</a>
        </div>
        <p className={styles.subPara}>
          SUBSCRIBE TO REVIEVE UPDATES AND SPECIAL OFFERS!
        </p>
        <div className={styles.inputContainer}>
          <input
            type="email"
            inputMode="email"
            placeholder="YOUR EMAIL ADDRESS"
            className={styles.input}
          />
          <button className={styles.subscribeBtn}>SUBSCRIBE</button>
        </div>
        <p className={styles.contact}>
          CUSTOMERSERVICE@BOHEMIANTRADERS.COM | +61 2 4327 8640 | MON - FRI |
          9AM - 5PM AEST
        </p>
      </div>
      <div className={styles.dataContainer}>
        <p>Manage Website Data Collection Preferences</p>
      </div>
    </>
  );
};

export default Footer;
