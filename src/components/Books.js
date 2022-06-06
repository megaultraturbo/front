import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/book"
import BookForm from "./BookForm";

const Books = (props) => {
    const [x,setX] = useState(0);  

    useEffect(()=>{
        props.fetchAllBooks()
    },[])// componentDidMount



    return ( 
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <BookForm/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>BookId</TableCell>
                                    <TableCell>AuthorId</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>PagesNumber</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                               {
                                   props.BookList.map((record,index)=>{
                                        return (<TableRow key={index}>
                                            <TableCell>{record.bookId}</TableCell>
                                            <TableCell>{record.authorId}</TableCell>
                                            <TableCell>{record.title}</TableCell>
                                            <TableCell>{record.pagesNumber}</TableCell>
                                        </TableRow>)
                                   })
                               } 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
     );
}

const mapStateToProps = state=>({

        BookList:state.book.list
    
})

const mapActionsToProps = {
    fetchAllBooks : actions.fetchall
}

export default connect(mapStateToProps, mapActionsToProps)(Books);