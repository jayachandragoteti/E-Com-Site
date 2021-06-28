import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AddCategory() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Card>
                <CardContent>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Add Category
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                type="text"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="category"
                                label="Category Name"
                                name="category"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Add
                            </Button>
                        </form>
                    </div>
                    <Box mt={8}>

                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}