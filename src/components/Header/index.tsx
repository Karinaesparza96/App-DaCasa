import { ReactNode } from 'react';
import styles from './Header.module.scss';
import { Outlet } from 'react-router-dom';

const Header = ({ children }: { children?: ReactNode }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                A casa da massa
                </div>
            </header>
            <div>
                <Outlet />
                {children}
            </div>
        </>
    );
};

export default Header;