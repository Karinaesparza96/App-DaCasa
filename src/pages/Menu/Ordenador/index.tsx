import classNames from 'classnames';
import styles from './Ordenador.module.scss';
import options from './options.json';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

interface IProps {
    ordenaPor: OpcoesOrdenador,
    setOrdenaPor: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

const Ordenador = ({ ordenaPor, setOrdenaPor }: IProps) => {
    const [open, setOpen] = useState(false);
    const nomeOrdenador = ordenaPor && options.find((opc) => opc.value === ordenaPor)?.nome;

    return (
        <button 
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--ativo']]: ordenaPor !== ''
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{nomeOrdenador || 'Ordenar por'}</span>
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: open
            })}>
                {options.map((opc) => (
                    <div
                        className={styles.ordenador__option}
                        key={opc.value}
                        onClick={() => setOrdenaPor(opc.value as OpcoesOrdenador)}
                    >
                        {opc.nome}
                    </div>
                ))}
            </div>
        </button>
    );
};

export default Ordenador;