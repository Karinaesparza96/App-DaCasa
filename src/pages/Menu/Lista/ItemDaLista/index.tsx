import styles from './ItemDaLista.module.scss';
import classNames from 'classnames';
import { IMenu } from 'pages/Menu/interfaces/IMenu';

const ItemDaLista = (item: IMenu) => {
    const { id, title, description, category, size, serving, price, photo} = item;
    return ( 
        <div className={styles.item} key={id}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__tipo] : true,
                        [styles[`item__tipo__${category.label.toLocaleLowerCase()}`]]: true,
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size}g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        {`Serve ${serving} pessoa${serving === 1 ? '' : 's'}`}
                    </div>
                    <div className={styles.item__valor}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default ItemDaLista;