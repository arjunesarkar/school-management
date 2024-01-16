import React, { useState } from 'react';
import Table from './Table';
import ExamHall from './ExamHall';
import Mail from './Mail';

const ExamHallReceipt = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Final exam (class 1)( No Section)"
          style={{
            width: '800px',
            height: '30px',
            fontSize: '15px',
            marginRight: '10px',
            backgroundColor: '#e6e8f6',
            color: 'black',
          }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          style={{ fontSize: '20px', width: '300px', backgroundColor: '#7F00FF', color: 'white' }}
          onClick={handleSearch}
        >
          Search Exam
        </button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Table />
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ExamHall />
        <Mail />
      </div>
    </div>
  );
};

export default ExamHallReceipt;
