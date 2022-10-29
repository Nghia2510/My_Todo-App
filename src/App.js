import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

/*css*/
import './App.css';
import './css/todo.css';

import { HomePage } from './Home';
import { About } from './About';
import { TimeLine} from './Page/TimeLine';

function App() {
  return (
    <div className="Todo_main">
        <BrowserRouter>
          <nav class = "navbar">
            <Link to='/home' className='mylink'>Home</Link>
            <Link to='/about' className='mylink'>About</Link>
            <Link to='/TodoList' className='mylink'>Todo</Link>
            <Link to='/TimeLine' className='mylink'>TimeLine</Link>
          </nav>
            <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/home' element={<HomePage/>} />
              <Route exact path='/TodoList' element={<TodoList />} />
              <Route exact path='/TimeLine' element={<TimeLine />} />
              
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;