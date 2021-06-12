import React from 'react';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function MainCard () {
    return(
    <React.Fragment>
        <Container maxWidth="sm" fixed>
            <Card>
                <CardContent>
                    <div>
                        <Typography component="h1" variant="h5">
                            Add Category
                        </Typography>
                        <form >
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
                </CardContent>
            </Card>
        </Container>
    </React.Fragment>);
};