import styles from './NavBar.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const rotas = [{
        label: 'Início',
        to: '/',
    },
    {
        label: 'Menu',
        to: '/menu'
    },
    {
        label: 'Sobre',
        to: '/sobre'
    }
    ];
    return (
        <div className={styles.container}>

            <nav className={styles.menu} id='sidebar'>
                <Logo />
                <ul className={styles.menu__list}>
                    {rotas.map((rota, i) => (
                        <li key={i} className={styles.menu__link}>
                            <Link to={rota.to} className={styles.menu__list}>
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;