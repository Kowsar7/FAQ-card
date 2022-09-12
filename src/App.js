import './App.css';
import { Routes, Route } from 'react-router'

import FAQAccordionCard from './Components/FAQAccordionCard/FAQAccordionCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FAQAccordionCard />} />
      </Routes>
    </div>
  );
}

export default App;