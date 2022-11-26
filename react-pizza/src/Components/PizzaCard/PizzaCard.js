import styles from './PizzaCard.module.css'

function PizzaCard() {
    return (
        <div className={styles.wrapper}>
            <img src="../../img/pizza1.png" alt="pizza card"/>
            <h3>Чізбургер-піцца</h3>
            <ul className={styles.pizzaMenu}>
                <li className={styles.activePizzaList}>Тонкі</li>
                <li>Традиційні</li>
                <li className={styles.activePizzaList}>26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
            </ul>
            <div className={styles.buttonPizza}>
                <div className={styles.price}>250 грн</div>
                <button className={styles.basketPizzaCard}>
                    <span className={styles.add}>+</span>
                    <div className={styles.addText}>Добавити</div>
                    <div className={
                        styles.addCount
                    }>0
                    </div>
                </button>
            </div>
        </div>
    );
}

export default PizzaCard;