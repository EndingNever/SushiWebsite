import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/Body/Body';
import Portfolio from './components/Portfolio/Portfolio';
import Nav from './components/Nav-component/Nav';

function App() {
  return (
    <div className="App">
      <div className="navbar-component">
        <Nav />
      </div>
      <div className='header-component'>
        <Header />
      </div>
      <div className="body-component">
        <Body />
      </div>
      <div className="portfolio-component">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
