import React, {useState} from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";

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
    
    const validate = () => {
        let temp ={}
        temp.title = values.title?"":"Required"
        temp.authorId = values.authorId?"":"Required"
        temp.pagesNumber = values.pagesNumber?"":"Required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x=> x== "")
    }

  const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initalFieldValues) 

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        if(!validate()){
            //window.alert('Please try again')
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

export default withStyles(styles)(BookForm);