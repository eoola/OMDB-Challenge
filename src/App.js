import logo from './logo.svg';
import './App.css';
import  Header from './components/Header/Header.js';
import  MovieList  from './components/MovieList/MovieList.js';
import  Search  from './components/Search/Search.js';
import  Footer  from './components/Footer/Footer.js';


function App() {
  return (
    <div>
      <Header title="Movie Search App"></Header>
      <Search></Search>
    </div>
  );
}

export default App;
