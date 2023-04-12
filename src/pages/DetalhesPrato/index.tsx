import classNames from 'classnames';
import styles from './Detalhes.module.scss';
import { useParams, useNavigate} from 'react-router-dom';
import useScrollTop from 'common';
import menu from 'data/menu.json';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';

const DetalhesPrato = () => {
    useScrollTop();
    // const { state } = useLocation(); // recuperando state passado como parametro no navigate
    // const { prato } = state;
    const { id } = useParams();
    const navigate = useNavigate();
    const prato = menu.find(item => item.id === Number(id));
    if (!prato) {
        return <NotFound />;
    }
    return (
        <Header>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.tags__tipo]: true,
                            [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true,
                        })}>
                            {prato.category.label}
                        </div>
                        <div className={styles.tags__porcao}>
                            {prato.size}g
                        </div>
                        <div className={styles.tags__qtdpessoas}>
                            Serve {prato.serving} pessoa{prato.serving > 1 ? 's' : ''}
                        </div>
                        <div className={styles.tags__valor}>
                            R${prato.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </Header>
    );
};

export default DetalhesPrato;