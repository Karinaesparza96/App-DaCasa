import NavBar from 'components/NavBar';
import Inicio from 'pages/Inicio';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/menu' element={<Menu/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;