import styles from './userInfo.module.css'
import { LogoutSvg } from "../../icons/logout";
import { ChallengeSvg } from "../../icons/challenge";
export const UserInfo = () => {
    return (
      <div className={styles.username__wrapper}>
        <div className={styles.username__questlog}>
          <div className={styles.circle__letter}>
            U{/* tutaj będzie pierwsza litera imienia użytkowanika */}
          </div>
          <div className={styles.username__info}>Username Quest Log</div>
        </div>
        <button className={styles.challenge__button}>
          <ChallengeSvg
            className={styles.challenge__icon}
            width={14}
            height={14}
          />
        </button>
        <button className={styles.logout__button}>
          <LogoutSvg className={styles.logout__icon} width={21} height={16} />
        </button>
      </div>
    );
}