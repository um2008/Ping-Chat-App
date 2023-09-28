import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';

function App() {
  return (
  <div className='App' style={{height: "100%", width: "100%"}}> 
    <Route path='/' component={Homepage} exact/>
    <Route path='/chats' component={Chatpage}/>
  </div>
  );
}

export default App;
