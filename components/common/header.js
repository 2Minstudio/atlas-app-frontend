import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <header>
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      Logo & Header Content Goes here
    </header>
  );
};

export default Header;
