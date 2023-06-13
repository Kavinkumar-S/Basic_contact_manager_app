import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Contactform from './components/Contactform';
function App() {
  return (
   <>
   <div class="container-fluid">
  <div className='container'>
   
   <Header/>

   <Contactform/>
    </div>
  </div>

   </>
  );
}

export default App;
