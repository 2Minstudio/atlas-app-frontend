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
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      ></a>

      <div class="container p-5 my-5">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col d-none d-md-block">
            <p>
              {" "}
              <Image width="100px" alt="Logo" src="/image/logo.png" />{" "}
              <span class="small-text-14 align-bottom">
                Copyright © 2020. All rights reserved. Made in India
              </span>
            </p>
          </div>
          <div class="col d-block d-md-none text-center">
            <Image width="100px" alt="Logo" src="/image/logo.png" />{" "}
            <span class="small-text-14 align-bottom">
              <p> Copyright © 2020. All rights reserved. Made in India</p>
            </span>
          </div>
          <div class="col text-end text-success d-none d-md-block">
            <a
              href="https://www.facebook.com/atlaschiroindia/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/atlaschiroindia"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/atlaschiroindia/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/atlas-chiropractic-wellness/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faLinkedin} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqOyB_s3MiK3zyH6WhRgJFQ"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faYoutube} />
            </a>
          </div>

          <div class="col text-end text-success d-block d-md-none text-center">
            <a
              href="https://www.facebook.com/atlaschiroindia/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/atlaschiroindia"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/atlaschiroindia/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/company/atlas-chiropractic-wellness/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faLinkedin} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCqOyB_s3MiK3zyH6WhRgJFQ"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon class="Aicon" icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
