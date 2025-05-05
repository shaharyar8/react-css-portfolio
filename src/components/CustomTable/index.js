import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './CustomTable.css';

function CustomTable({ data = [], headers = [], keys = [] })
{

  if (!data.length || !headers.length || !keys.length || headers.length !== keys.length) {
     return <Paper className="custom-table-paper"><p>No education data available or props mismatch.</p></Paper>;
  }

  return (
    <TableContainer component={Paper} className="custom-table-paper">
      <Table className="custom-table" aria-label="custom table">
        <TableHead className="custom-table-head">
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} className="custom-table-header-cell">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="custom-table-body">
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="custom-table-row">
              {keys.map((key) => (
                <TableCell key={`${rowIndex}-${key}`} component="th" scope="row" className="custom-table-body-cell">
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;