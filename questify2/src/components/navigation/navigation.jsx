import styles from './navigation.module.css';

import { UserInfo } from '../userInfo/userInfo';
export const Navigation = () => {
    return (
      <div className={styles.navigation}>
        <div className={styles.logo__wrapper}>
          <a href="/#">
            <span className={styles.logo}>Questify</span>
          </a>
        </div>
        <UserInfo/>
       
      </div>
    );
}