import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Inicio from 'pages/Inicio';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <main>
            <Router>
                <NavBar />
                <Header />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/menu' element={<Menu />} />
                </Routes>
            </Router>
        </main>
    );
};

export default AppRouter;