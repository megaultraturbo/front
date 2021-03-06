import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles, Button, ButtonGroup } from "@material-ui/core";//from "@mui/material";
import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/book"
import BookForm from "./BookForm";
import { useToasts } from "react-toast-notifications";

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
    const [currentId, setCurrentId] = useState(0)

    // tosty for riiil bym zjad tbh gloduwa frrr 100
    const {addToast} = useToasts()

    const [x,setX] = useState(0);  

    useEffect(()=>{
        props.fetchAllBooks()
    },[])// componentDidMount


    const onDelete = bookId =>{
        if(window.confirm("Delete book from database?"))
        props.deleteBook(bookId,()=>addToast("Deleted!",{appearance:"info"}))
    }


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
                                            <TableCell>ID</TableCell>
                                            <TableCell>AuthorID</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell>Pages</TableCell>
                                            <TableCell></TableCell>
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
                                                    <TableCell>
                                                    <ButtonGroup variant="text" aria-label="actions">
                                                        <Button onClick={() => {setCurrentId(record.bookId); console.log(record.bookId)}}>???</Button>
                                                        <Button onClick={()=> onDelete(record.bookId)}>????</Button>
                                                    </ButtonGroup>
                                                    </TableCell>
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
                            <BookForm {...({currentId, setCurrentId})}/>
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
    fetchAllBooks : actions.fetchall,
    deleteBook: actions.deleteBook
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Books));