import styles from './plusBtn.module.css'

export const PlusBtn = ({ fnt }) => {
    return (
      <button
        type="button"
        className={styles.plus_btn}
        onClick={
         fnt
          // po kliknięciu dodanie nowej karty
        }
      >
        +
      </button>
    );
}