import Buscador from './Buscador';
import Filtros from './Filtros';
import styles from './Menu.module.scss';
import { useState } from 'react';
import Ordenador, { OpcoesOrdenador } from './Ordenador';
import Lista from './Lista';

const Menu = () => {
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenaPor, setOrdenaPor] = useState<OpcoesOrdenador>('');

    return (
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Menu</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordenaPor={ordenaPor} setOrdenaPor={setOrdenaPor} />
            </div>
            <Lista busca={busca} filtro={filtro} ordenaPor={ordenaPor} />
        </section>
    );
};

export default Menu;