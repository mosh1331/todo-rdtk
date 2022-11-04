import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '../../redux/store';
import DeleteIcon from '@mui/icons-material/Delete';
import {removeEntry} from '../../redux/users'
import { Typography } from '@mui/material';

interface UserItem{
    name:string;
    id:string;
    age?:number;
    hasLicense:boolean;
}

export default function TableView() {
const dispatch = useDispatch()
const {entries} = useSelector((state:RootState )=> state.users)


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Have License</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.length > 0 ? entries.map((row:UserItem) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.hasLicense}</TableCell>
              <TableCell align="right">{row.age === 0 ? '--':row.age}</TableCell>
              <TableCell align="right" onClick={()=>dispatch(removeEntry(row.id))}><DeleteIcon /></TableCell>
            </TableRow>
          )):<Typography sx={{margin:"0 auto",color:'red',textAlign:"center"}}>No data</Typography>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
