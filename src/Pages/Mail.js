import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { id: 'delete', label: '', minWidth: 15 },
  { id: 'name', label: 'Student Name', minWidth: 70 },
  { id: 'code', label: 'Student Roll No', minWidth: 70 },
];

function createData(name, code) {
  return { name, code };
}

const rows = [
  createData('Oishi', '40'),
  createData('Dipanita', '30'),
  createData('Redoy', '31'),
  createData('Emon', '50'),
];



const StickyHeadTable = () => {
  return (
    <Paper sx={{ width: '55%',height:'50%', overflow: 'hidden' }}>
      <h5>Assign Exam Hall Student</h5>
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
                    color: 'black', // Set text color for header cells
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  backgroundColor: row.code > 40  
                }}
              >
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} align={column.align}>
                    {column.id === 'delete' ? (
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    ) : (
                      column.format && typeof row[column.id] === 'number'
                        ? column.format(row[column.id])
                        : row[column.id]
                    )}
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
          SEND MAIL
        </button>
      </TableContainer>
    </Paper>
  );
};

export default StickyHeadTable;

     
