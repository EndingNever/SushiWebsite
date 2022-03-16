import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/Body/Body';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
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
