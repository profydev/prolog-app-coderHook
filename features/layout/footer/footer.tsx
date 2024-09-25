import styles from "./footer.module.scss";
import Image from "next/image";
import { version } from "../../../package.json";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Version />
          <FooterLinks />
          <Logo />
        </div>
      </div>
    </footer>
  );
};

const Version = () => {
  return (
    <div className={styles["footer-version"]} data-cy="footer-version">
      <p className={styles["footer-text"]}>Version: {version}</p>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <ul className={styles["footer-links"]}>
      <li className={styles["footer-link"]}>
        <a href="#">Docs</a>
      </li>
      <li className={styles["footer-link"]}>
        <a href="#">API</a>
      </li>
      <li className={styles["footer-link"]}>
        <a href="#">Help</a>
      </li>
      <li className={styles["footer-link"]}>
        <a href="#">Community</a>
      </li>
    </ul>
  );
};

const Logo = () => {
  return (
    <div className={styles["footer-logo-wrapper"]} data-cy="footer-logo">
      <Image src="/icons/footer-logo.svg" alt="logo" width={23} height={33} />
    </div>
  );
};
