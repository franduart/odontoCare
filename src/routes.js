import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../src/Home';
import Sobre from '../src/pages/sobre';
import ServicosPage from '../src/pages/servicos'
import Notfound from '../src/pages/notfound'
import Header from './components/Header';
import Footer from './components/Footer';

function AppRotas(){
   return(
    <BrowserRouter>
      <Header/>
    <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/sobre' element={ <Sobre/>}/>
        <Route path='/servicos' element={ <ServicosPage/>}/>

        <Route path='/*' element={ <Notfound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   )
}

export default AppRotas;