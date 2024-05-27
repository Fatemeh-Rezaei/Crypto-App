import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Fatemeh with ♥</p>
      </footer>
    </>
  );
}

export default Layout;
