import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const columns = [
  { id: 'select', label: 'Select', minWidth: 50 },
  { id: 'name', label: 'Student Name', minWidth: 70 },
  { id: 'code', label: 'Student Roll No', minWidth: 70 },
];

function createData(id, name, code) {
  return { id, name, code };
}

const rows = [
  createData(1, 'Oishi', '40'),
  createData(2, 'Dipanita', '30'),
];

export default function StickyHeadTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectRow = (id) => {
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    setSelectedRows(newSelectedRows);
  };

  const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Paper sx={{ width: '45%', height:'50%',overflow: 'hidden' }}>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
        <TextField
          select
          label="Select Exam Hall"
          value={selectedOption}
          onChange={handleChangeSelect}
          variant="outlined"
          style={{ marginBottom: '8px', width: '400px', height: '55px', backgroundColor: '#e6e8f6', 
          color: 'black'}}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </TextField>
        <h5>Not assign Exam Hall Student</h5>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                     minWidth: column.minWidth,
                     backgroundColor: '#e6e8f6', 
                     color: 'black' 
                    }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </TableCell>
                {columns.slice(1).map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof row[column.id] === 'number'
                      ? column.format(row[column.id])
                      : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button
          style={{
            fontSize: '20px',
            width: '100%',
            backgroundColor: '#7F00FF',
            color: 'white',
          }}
        >
          Assign Exam List
        </button>
      </TableContainer>
    </Paper>
  );
}
