import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/ClassComponents/Body';
import Header from './Components/ClassComponents/Dashboard';
// import ClassComponentIndex from './Components/ClassComponents';
import FunctionalComponent from './Components/FunctionalComponents';
import FBody from './Components/FunctionalComponents/Body';
import FHeader from './Components/FunctionalComponents/Header';

function App() {
  return (
    <BrowserRouter>
      <FHeader />
      <FBody />
    </BrowserRouter>
  );
}

export default App;
