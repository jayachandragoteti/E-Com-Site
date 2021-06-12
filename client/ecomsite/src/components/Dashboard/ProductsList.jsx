import React from 'react';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';


export default function AddProductCard () {
    const products = [
        {
            "id":1,
            "name":"Product-1",
            "description":"description-1",
            "mrp":1,
            "sp":1,
            "category":"category-1",
            "images":[
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(1).png",
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(1).png",
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(2).png",
            ]
        },
        {
            "id":2,
            "name":"Product-2",
            "description":"description-2",
            "mrp":2,
            "sp":2,
            "category":"category-2",
            "images":[
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(2).png",
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(1).png",
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(2).png",
            ]
        },
        {
            "id":3,
            "name":"Product-3",
            "description":"description-3",
            "mrp":3,
            "sp":3,
            "category":"category-3",
            "images":[
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(1).png",
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(1).png",
                "https://jayachandragoteti.github.io/MyNewPortfolio/assets/img/favicon%20(2).png",
            ]
        }
    ];
    return(
        <Container maxWidth="lg" fixed>
            <Card>
                <CardContent>
                    <div>
                        <Typography component="h1" variant="h5">
                            My Products
                        </Typography>
                        <Grid container spacing={1}>
                            {products.map((product)=>(
                                <Grid item xs key={products.id}>
                                    <ProductCard productData={product}></ProductCard>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </Container>);
};