import styles from './Header.module.css';
function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.leftSize}>
                <img src="../../img/Logo.png" alt="Logo"/>
                <div  style={{marginLeft:"17px"}}>
                    <h1>REACT PIZZA</h1>
                    <div className={styles.title}>Сама смачна піцца у світі</div>
                </div>
            </div>
            <button className={styles.addToBtn}>
                <div className="price">520 грн</div>
                <span className={styles.line}></span>
                <div className={styles.basket}>
                    <img src="../../img/basket.png" alt="Basket"/>
                    <div className={
                        styles.count
                    }>3</div>
                </div>
            </button>
        </header>
    );
}
export default Header;