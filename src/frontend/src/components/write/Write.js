import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './Write.css';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // border: '1px solid gray',
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '10px',
        marginRight: '10px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    form: {
        border: '5px solid red'
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const Write = () => {

    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
           
            <TextField
                id="standard-textarea"
                label="Title"
                placeholder="제목을 입력하세요"
                multiline
                className={classes.textField}
                margin="normal"
            />
            
            <TextField
                id="outlined-multiline-flexible"
                label="Contents"
                multiline
                rowsMax="20"
                style={{ margin: 8, width:'100%' }}
                placeholder="상상을 펼치세요!"
                onChange={handleChange('multiline')}
                className={classes.textField}
                margin="normal"
                // helperText="hello"
                variant="outlined"
            />

            <Button variant="contained" color="primary" className={classes.button}>
                등록
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
                취소
            </Button>
            
        </form>
    );
};

export default Write;