// import React, { useState, useEffect } from 'react';
// import MeetingHeader from './MeetingHeader';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// // import Paper from '@material-ui/core/Paper';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-of-type(odd)': {
//             backgroundColor: theme.palette.action.hover,
//         },
//     },
// }))(TableRow);

// function createData(name, calories, fat, carbs, protein, status) {
//     return { name, calories, fat, carbs, protein, status };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'pending'),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'approved'),
//     createData('Eclair', 262, 16.0, 24, 6.0, 'cancelled'),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 'pending'),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 'rescheduled'),
// ];

// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
// });

// const MyMeeting = () => {
//     const classes = useStyles();

//     return (
//         <div>
//             <MeetingHeader />
//             <TableContainer>
//                 <Table className={classes.table} aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell>Created At</StyledTableCell>
//                             <StyledTableCell>Slot</StyledTableCell>
//                             <StyledTableCell>Updated At</StyledTableCell>
//                             <StyledTableCell>User</StyledTableCell>
//                             <StyledTableCell>Representative</StyledTableCell>
//                             <StyledTableCell>Status</StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <StyledTableRow key={row.name}>
//                                 <StyledTableCell component="th" scope="row">
//                                     {row.name}
//                                 </StyledTableCell>
//                                 <StyledTableCell>{row.calories}</StyledTableCell>
//                                 <StyledTableCell>{row.fat}</StyledTableCell>
//                                 <StyledTableCell>{row.carbs}</StyledTableCell>
//                                 <StyledTableCell>{row.protein}</StyledTableCell>
//                             </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }

// export default MyMeeting
