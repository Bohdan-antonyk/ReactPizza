import styles from './Filter.module.css';

function Filter() {
    return (<div className={styles.wrapper}>
        <div className={styles.leftSide}>
            <button className={styles.filter}
                    className={styles.active}
            >Все
            </button>
            <button className={styles.filter}>М'ясні</button>
            <button className={styles.filter}>Вегетаріанська</button>
            <button className={styles.filter}>Гриль</button>
            <button className={styles.filter}>Гострі</button>
            <button className={styles.filter}>Закриті</button>
        </div>
        <div className={styles.rightSide}>
            <img src="../../img/triangle.png" alt="triangle"/>
            <div className={styles.sortText}>Сортування по:
                <a href="#"><span className={styles.orangeText} >Популярності</span></a>
            </div>
        </div>
        <ul className={styles.listToFilter}>
            <li className={styles.activeLink}>Популярності</li>
            <li>по ціні</li>
            <li>по алфавіту</li>
        </ul>
    </div>)
}

export default Filter;