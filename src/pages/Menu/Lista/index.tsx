import menu from "./menu.json";
import styles from "./Lista.module.scss";
import ItemDaLista from "./ItemDaLista";
import { useState, useEffect, useCallback } from "react";

interface IProps {
  busca: string;
  filtro: number | null;
  ordenaPor: string;
}
const Lista = (props: IProps) => {
  const [lista, setLista] = useState(menu);
  const { busca, filtro, ordenaPor } = props;

  const testaBusca = useCallback(
    (title: string) => {
      const regex = new RegExp(busca, "i");
      const searchExp = regex.test(title);
      return searchExp;
    },
    [busca]
  );

  const testaFiltro = useCallback(
    (id: number) => {
      if (filtro !== null) {
        return filtro === id;
      }
      return true;
    },
    [filtro]
  );
    const ordenarPropriedadeCrescente = (
        lista: typeof menu, 
        // prop: keyof Pick<typeof menu[0], 'size' | 'serving'| 'price'>
        prop: 'size' | 'serving' | 'price'
        ) => {
        return lista.sort((a, b) => a[prop] > b[prop] ? 1 : -1)
        }
    const ordenaLista = useCallback((nvLista: typeof menu) => {
        switch (ordenaPor) {
            case 'porcao':
                return ordenarPropriedadeCrescente(nvLista, 'size')
            case 'qtd_pessoas':
                return ordenarPropriedadeCrescente(nvLista, 'serving')
            case 'preco':
                return ordenarPropriedadeCrescente(nvLista, 'price')
            default:
                return nvLista
        }
    }, [ordenaPor])

  useEffect(() => {
    const novaLista = menu.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenaLista(novaLista));
  }, [busca, filtro, testaBusca, testaFiltro, ordenaLista]);
  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <ItemDaLista key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Lista;
