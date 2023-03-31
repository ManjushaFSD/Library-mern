import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import BooksEntry from './components/BooksEntry';
import BooksView from './components/BooksView'; 
import BookSearch from './components/BookSearch';


function App() {
  return (
    
<div>
<BrowserRouter>
      
      <Routes>

<Route exact path='/' element={<BooksEntry/>} />
<Route exact path='/viewall' element={<BooksView/>} />
<Route exact path='/searchbook' element={<BookSearch/>} />
      </Routes>
      
      </BrowserRouter>
</div>
    
  )
}

export default App;
