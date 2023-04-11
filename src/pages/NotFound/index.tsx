import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/notfound/not_found.svg';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>

    );
};

export default NotFound;