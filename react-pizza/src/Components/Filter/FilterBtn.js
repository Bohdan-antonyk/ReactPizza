import styles from './Filter.module.css';

function Filter() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <button className={styles.filter}
                        className={styles.active}
                >Все
                </button>
                <button className={styles.filter}>Мясные</button>
                <button className={styles.filter}>Вегетарианская</button>
                <button className={styles.filter}>Гриль</button>
                <button className={styles.filter}>Острые</button>
                <button className={styles.filter}>Закрытые</button>
            </div>
            <div className={styles.rightSide}>
                <img src="../../img/triangle.png" alt="triangle"/>
                <div className={styles.sortText}>Сортировка по: <a href="#"><span className={styles.orangeText}>популярности</span></a>
                </div>
            </div>
        </div>)
}

export default Filter;