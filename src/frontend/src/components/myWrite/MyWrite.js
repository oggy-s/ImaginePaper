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
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
        </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
        </Typography>
            </Paper>
        </div>
    );
}