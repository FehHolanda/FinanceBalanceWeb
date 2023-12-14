import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Transaction, TransactionTamplate } from '../../types/Transaction';
import * as C from "./styles";

function createTransaction(
    transaction : Transaction
) {
    return transaction;
}

const rows = [
    createTransaction({id:0,name:'Comida',card:'Nubank',value:10.98,isDone:false}),   
];

export default function BasicTable() {
    return (
        <div>
            <C.H3>Lançamentos Totais</C.H3>
            <C.Table>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {TransactionTamplate.map((item)=>{
                                return (
                                <TableCell key={`head${item}`}>{item}</TableCell>
                                );
                            })}                         
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" key="id">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left" key = "name">{row.name}</TableCell>
                                <TableCell align="left" key = "value">R${row.value}</TableCell>
                                <TableCell align="left" key = "card">{row.card}</TableCell>
                                <TableCell align="left" key = "isdone">{`${row.isDone}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </C.Table>            
        </div>

    );
}