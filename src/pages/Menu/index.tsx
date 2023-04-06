import Buscador from './Buscador';
import Filtros from './Filtros';
import styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import { useState } from 'react';
import Ordenador, {OpcoesOrdenador} from './Ordenador';
import Lista from './Lista';



const Menu = () => {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenaPor, setOrdenaPor] = useState<OpcoesOrdenador>('');

    return ( 
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro}/>
                    <Ordenador ordenaPor={ordenaPor} setOrdenaPor={setOrdenaPor}/>
                </div>
                <Lista busca={busca} filtro={filtro} ordenaPor={ordenaPor}/>
            </section>
           
        </main>
     );
}
 
export default Menu;