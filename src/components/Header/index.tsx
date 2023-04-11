import styles from './Header.module.scss';
import {Outlet} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa
                </div>
            </header>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Header;