import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";//from "@mui/material";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/book"
import BookForm from "./BookForm";

const styles = theme => ({
    // override class - klase se pobierasz z f12 loool
    root :{
        "& .MuiTableCell-head":{
            fontSize: "1.25rem"
        }
    },

    paper :{
        margin: theme.spacing(2),
        padding: theme.spacing(2)

    }
})

// props.classes
// const[classes ...props] = props

const Books = ({classes,...props}) => {
    const [x,setX] = useState(0);  

    useEffect(()=>{
        props.fetchAllBooks()
    },[])// componentDidMount



    return ( 
        
        //<Paper className={classes.paper}>
            <Grid container >
                <Grid container item xs={6} style={{height: '100%'}}>
                    <Paper className={classes.paper}   elevation={3}>
                        <Grid>
                            <TableContainer>
                                <Table>
                                    <TableHead className={classes.root}>
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
                                                return (<TableRow key={index} hover>
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
                    </Paper>
                </Grid>
                <Grid container item xs={6} style={{height: '10px'}}>
                    <Paper className={classes.paper}   elevation={3}>
                        
                            <BookForm/>
                        
                    </Paper>
                </Grid>
            </Grid>
        //</Paper>
     );
}

const mapStateToProps = state=>({

        BookList:state.book.list
    
})

const mapActionsToProps = {
    fetchAllBooks : actions.fetchall
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Books));