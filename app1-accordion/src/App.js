import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion';

function App() {
  return (
    <div className="App">
       <Accordion title="Section 1" content="Lorem ipsum dolor sit amet." />
      <Accordion title="Section 2" content="Consectetur adipiscing elit." />
    </div>
  );
}

export default App;
