import menu from 'data/menu.json';
import styles from './Inicio.module.scss';


const Inicio = () => {
    let pratosRecomendados = [...menu];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0,3);

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
                        <button className={styles.recomendado__botao}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};
 
export default Inicio;