import Footer from 'components/Footer';
import Header from 'components/Header';
import NavBar from 'components/NavBar';
import Inicio from 'pages/Inicio';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <main>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Header />} errorElement={<NotFound/>}>
                        <Route index element={<Inicio />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='sobre' element={<Sobre/>}/>
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
};

export default AppRouter;