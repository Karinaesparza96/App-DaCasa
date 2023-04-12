import menu from 'data/menu.json';
import styles from './Inicio.module.scss';
import imagem from 'assets/nossa_casa.png';
import {useNavigate} from 'react-router-dom';
import useScrollTop from 'common';

export interface IPrato {
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
        id: number;
        label: string;
    };
}

const Inicio = () => {
    useScrollTop();
    let pratosRecomendados = [...menu];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0,3);

    const navigate = useNavigate();

    const verMaisDetalhesPrato = (prato: IPrato) => {
        navigate(`/prato/${prato.id}`, {state: {prato}});
    };

    return ( 
        <section>
            <h3 className={styles.titulo}>Recomendações da cozinha</h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div className={styles.recomendado} key={item.id}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title}/>
                        </div>
                        <p className={styles.recomendado__descricao}>{item.description}</p>
                        <button 
                            className={styles.recomendado__botao}
                            onClick={() => verMaisDetalhesPrato(item)}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={styles.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src={imagem} alt='Casa da massa' />
                <div className={styles.nossaCasa__endereco}>
                    Rua XV, 123 <br></br> Vila Florida - PR
                </div>
            </div>
        </section>
    );
};
 
export default Inicio;