import { useTable } from 'react-table';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, TableContainer } from '@material-ui/core';
import image1 from '../../assets/Activity_status_L1.jpg';
import image2 from '../../assets/Percentage_activity_L1.jpg';
import operatorData from '../../data/operatorData';
export default function AppTable(props) {
  const [locationid, setlocationid] = React.useState(1);
  // console.log(operatorData[1]);

  const data = React.useMemo(
    () => (locationid === -1 ? [] : operatorData[locationid]),
    []
  );
  console.log(data);
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
  console.log(data);
  return (
    <div
      style={{
        height: '88vh',
        overflow: 'scroll',
      }}
    >
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
      <img
        src={image1}
        alt="Activity status L1"
        style={{
          width: '100%',

          height: 'auto',
        }}
      />
      <img
        src={image2}
        alt="percentage activity"
        style={{
          width: '100%',

          height: 'auto',
        }}
      />
    </div>
  );
}
