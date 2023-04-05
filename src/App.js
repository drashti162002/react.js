
import './App.css';
import {Routes , Route} from 'react-router-dom';
import Myapp from './Components/Myapp'
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='/' element={<Myapp />}></Route>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        </Routes>
      </div>
  );
}

export default App;
