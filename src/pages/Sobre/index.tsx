import styles from './Sobre.module.scss';
import imgSobreCasa from 'assets/sobre/casa.png';
import imgSobreMassa1 from 'assets/sobre/massa1.png';
import imgSobreMassa2 from 'assets/sobre/massa2.png';
import useScrollTop from 'common';

const imagens = [imgSobreMassa1, imgSobreMassa2];

const Sobre = () => {
    useScrollTop();
    return (
        <section>
            <h3 className={styles.sobreNos__titulo}>Sobre</h3>
            <div className={styles.sobreNos}>
                <img src={imgSobreCasa} alt="casa da massa" />

                <div className={styles.sobreNos__texto}>
                    <p>Nós da Casa da Massa oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada do Paraná! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!</p>
                    <p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
                    <p>Para acompanhar as massas italianas, Casa da Massa possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!</p>
                </div>

            </div>
            <div className={styles.imagens}>
                {imagens.map((img, i) => (
                    <div className={styles.imagens__imagem} key={i}>
                        <img src={img} alt='imagem de massa' />
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Sobre;