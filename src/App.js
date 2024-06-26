import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';

function App() {
  return (
    <div className='main'>
      <Header className="header"/>
      <Outlet/>
    </div>
  );
}

export default App;
