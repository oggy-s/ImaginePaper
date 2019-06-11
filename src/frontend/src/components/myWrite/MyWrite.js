import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './MyWrite.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        border: '1px solid black',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    내가 쓴 글 제목
        </Typography>
                <Typography component="p">
                    음 내용을 줄여보여주는게 나을까...
        </Typography>
            </Paper>
        </div>
    );
}