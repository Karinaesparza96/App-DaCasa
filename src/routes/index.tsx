import Footer from 'components/Footer';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Detalhes from 'pages/DetalhesPrato';
import Inicio from 'pages/Inicio';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <main className='container'>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Inicio />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='prato/:id' element={<Detalhes/>}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
};

export default AppRouter;