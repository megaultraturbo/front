import React, {useState} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/book"

const styles = theme => ({
    // override class - klase se pobierasz z f12 loool
    root :{
        "& .MuiTextField-root":{
            margin: theme.spacing(2),
            width: '220px'
        },
        "& .MuiButtonBase-root":{
            margin: theme.spacing(2),
            width: '220px',
            height: '56px'
        }
    }
})

const initalFieldValues = {
    title : "",
    authorId : "",
    pagesNumber : ""
}

const BookForm = ({classes, ...props}) => {
    
    // validate()
    // validate({title: 'kuba'})
    const validate = (fieldValues = values) => {
        let temp ={}
        if ('title' in fieldValues)
            temp.title = fieldValues.title?"":"Required"
        if ('authorId' in fieldValues)
            temp.authorId = fieldValues.authorId?"":"Required"
        if ('pagesNumber' in fieldValues)
            temp.pagesNumber = fieldValues.pagesNumber?"":"Required"
        setErrors({
            ...temp
        })
        if(fieldValues == values)
            return Object.values(temp).every(x=> x== "")
    }

  const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initalFieldValues,validate) 

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        if(validate()){
            props.createBook(values, () =>{window.alert('inserted')})
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" noValidate className={classes.root} style={{height: 'auto'}}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                    name="title"
                    variant="outlined"
                    label="Book title"
                    value={values.title}
                    onChange={handleInputChange}
                    {...errors.title && {error:true, helperText:errors.title}}
                    />
                    
                    <TextField
                    name="pagesNumber"
                    variant="outlined"
                    label="Number of pages (integer)"
                    type="number"
                    inputMode="numeric"
                    value={values.pagesNumber}
                    onChange={handleInputChange}
                    {...errors.pagesNumber && {error:true, helperText:errors.pagesNumber}}
                    />

                    <TextField
                    name="authorId"
                    variant="outlined"
                    label="Authod ID (integer)"
                    type="number"
                    inputMode="numeric"
                    value={values.authorId}
                    onChange={handleInputChange}
                    {...errors.authorId && {error:true, helperText:errors.authorId}}
                    />

                    <Button variant="contained"
                    color="primary"
                    type="submit">
                        Add book
                    </Button>

                </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = state=>({

    BookList:state.book.list

})

const mapActionsToProps = {
    createBook : actions.create,
    updateBook : actions.update,
}

export default connect(mapStateToProps,mapActionsToProps) (withStyles(styles)(BookForm));