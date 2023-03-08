import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/Home.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container p-5 mt-5">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col d-none d-md-block">
            <p className="align-items-center">
              {" "}
              <div className="">
              <Image className="mt-2" width="200" height="52" alt="Logo" src="/image/logo.png"/>{" "}
              </div>
            </p>
          </div>
          <div className="col d-block d-md-none text-center">
           
            <Image width="200" height="52" alt="Logo" src="/image/logo.png" />{" "}
            
          </div>
          <div className="col text-end text-success d-none d-md-block align-items-center mt-2">
            <a
              href="https://www.facebook.com/atlaschiroindia/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/atlaschiroindia"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/atlaschiroindia/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/atlas-chiropractic-wellness/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faLinkedin} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqOyB_s3MiK3zyH6WhRgJFQ"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faYoutube} />
            </a>
          </div>

          <div className="col text-end text-success d-block d-md-none text-center align-items-center">
            <a
              href="https://www.facebook.com/atlaschiroindia/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/atlaschiroindia"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/atlaschiroindia/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/atlas-chiropractic-wellness/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faLinkedin} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqOyB_s3MiK3zyH6WhRgJFQ"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="AiconSocial" icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="row pt-1 g-0">
              <span className="small-text-14 text-center text-md-start">
                Copyright © 2022. All rights reserved. Made in India
              </span>
              </div>
      </div>
    </footer>
  );
}
