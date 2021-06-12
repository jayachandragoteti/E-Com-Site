import React from 'react';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


export default function AddProductCard () {
    return(
        <Container maxWidth="sm" fixed>
            <Card>
                <CardContent>
                    <div>
                        <Typography component="h1" variant="h5">
                            Add Product
                        </Typography>
                        <form >
                            <TextField
                                type="text"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Product Name"
                                name="category"
                                autoFocus
                            />
                            <TextField
                                type="text"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="description"
                                label="Product Description"
                                name="description"
                                
                            />
                            <TextField
                                type="number"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="mrp"
                                label="MRP"
                                name="mrp"
                                
                            />
                            <TextField
                                type="number"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="sp"
                                label="Selling Price"
                                name="sp"
                                
                            />
                            <TextField
                                type="select"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="Category"
                                label="Select Category"
                                name="Category"
                            />
                            <TextField
                                type="file"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="images"
                                name="images"
                                label="Product Image"
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
        </Container>);
};