import { React, useState , useEffect} from "react";
import Loading from './component/Loading';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import TopNavbar from "./component/TopNavbar";
import Navbar from './component/Navbar';

function App(){
const [loading, setLoading] = useState(true)
useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
}, [])
if (loading) {
   return <Loading/>
}
return (
<div>
  <BrowserRouter>
      <TopNavbar/>
      <Navbar/>
      <Routes>
        
      </Routes>
     </BrowserRouter>
</div>
);
}
export default App;