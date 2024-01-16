import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Exam', minWidth: 70 },
  { id: 'code', label: 'Class', minWidth: 70 },
  { id: 'population', label: 'Section', minWidth: 70,  },
  { id: 'size', label: 'Team', minWidth: 70,  },
  { id: 'Date', label: 'Start Date', minWidth: 70, },
  { id: 'extra1', label: 'End Date', minWidth: 70,  },

];

function createData(name, code, population, size,Date,extra1 ) {
  return { name, code, population, size, Date,extra1 };
}

const rows = [
  createData('Final Exam', 'Class 1', 'No see','Final Team', '30/3/2024','30/3/2024'),
];

export default function StickyHeadTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                     minWidth: column.minWidth ,
                     backgroundColor: '#e6e8f6', 
                    color: 'black',
                    }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
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
      </TableContainer>
    </Paper>
  );
}
