import styles from './tabuleiro.module.css'

export default function tabuleiro() {
    const square = (i) => {
        return (
            <div key={i} className={
                i % 2 !== 0 ? styles.square :
                    styles.square + ' ' + styles.black
            }>
            </div>
        )
    }

    const setSquares = () => {
        const tabule = []

        for (let i = 1; i < 64; i++) {
            tabule.push(square(i))
        }

        return tabule
    }

    return (
        <div className={styles.table}>
            {setSquares()}
        </div>
    )
}