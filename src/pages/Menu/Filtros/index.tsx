import filtros from './filtros.json';
import styles from  './Filtros.module.scss';
import classNames from 'classnames';
import {useCallback} from 'react';

type IOption = typeof filtros[0]
// Ou 
// interface IOption {
//     id: number,
//     label: string
// }
interface Props {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

const Filtros = ({ filtro, setFiltro }: Props) => {

    const selecionarFiltro = useCallback((option: IOption) =>{
        if(filtro === option.id){
            return setFiltro(null);
        }
        return setFiltro(option.id);
    }, [filtro]);
    return (
        <div className={styles.filtros}>{filtros.map((option) => (
            <button
                className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filtro === option.id
                })}
                key={option.id}
                onClick={() => selecionarFiltro(option)}>
                {option.label}
            </button>
        ))}</div>
    );
};

export default Filtros;