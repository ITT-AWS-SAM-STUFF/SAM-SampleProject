import logo from './logo.svg';
import HeaderBar from './Components/HeaderBar/HeaderBar';

import './App.css';
import SeatDisplay from './Components/SeatDisplay/SeatDisplay';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <SeatDisplay />
      <div className="build-info">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Built with React and AWS SAM</p>
      </div>
    </div>
  );
}

export default App;
