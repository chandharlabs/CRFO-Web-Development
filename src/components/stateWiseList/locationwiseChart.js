import { useTable } from 'react-table';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, TableContainer } from '@material-ui/core';

export default function AppTable() {
  const data = React.useMemo(
    () => [
      {
        band: '1800 Mhz',
        oper: 'Tata Teleservice',
        ulink: '1741.7 - 1744.1',
        dlink: '1836.7 - 1839.1',
      },
      {
        band: '1800 Mhz',
        oper: 'Tata Teleservice',
        ulink: '1741.7 - 1744.1',
        dlink: '1836.7 - 1839.1',
      },
      {
        band: '1800 Mhz',
        oper: 'Tata Teleservice',
        ulink: '1741.7 - 1744.1',
        dlink: '1836.7 - 1839.1',
      },
      {
        band: '1800 Mhz',
        oper: 'Tata Teleservice',
        ulink: '1741.7 - 1744.1',
        dlink: '1836.7 - 1839.1',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Band',
        accessor: 'band', // accessor is the "key" in the data
      },
      {
        Header: 'Operator',
        accessor: 'oper',
      },
      {
        Header: 'Uplink (Mhz)',
        accessor: 'ulink',
      },
      {
        Header: 'Downlink (Mhz)',
        accessor: 'dlink',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <Paper>
      <TableContainer>
        <MaUTable {...getTableProps()} size="small">
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} rowsPerPageOptions={[]}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </MaUTable>
      </TableContainer>
    </Paper>
  );
}
