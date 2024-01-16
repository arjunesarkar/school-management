import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExamHallList from '../../Pages/ExamHallList';
import ExamHallReceipt from '../../Pages/ExamHallReceipt';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ position: 'flex', top: 0, zIndex: 100, width: '30%' }}>
          <Link to="/examhalllist" style={navLinkStyle}>
            <button>Exam Hall List</button>
          </Link>

          <Link to="/examhallreceipt" style={navLinkStyle}>
            <button>Exam Hall Receipt</button>
          </Link>
        </nav>

        <Routes>
          <Route path="/examhalllist" element={<ExamHallList />} />
          <Route path="/examhallreceipt" element={<ExamHallReceipt />} />
        </Routes>
      </div>
    </Router>
  );
}

const navLinkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: 'white',
  hover:'purple' 

};

export default App;
