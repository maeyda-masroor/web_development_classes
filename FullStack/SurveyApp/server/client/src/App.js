import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route ,Routes} from 'react-router-dom';
import Leading from './component/Landing';
import Dashboard from './component/Dashboard';
import Surveynew from './component/surveyNew';
import Header from './component/Header';
import { Connect } from 'react-redux';
import * as actions from './action';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={<Leading/>}/>
        <Route path='/surveys' element={<Dashboard/>}/>
        <Route path='/survey/new' element={<Surveynew/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Connect(null,actions)(App);
