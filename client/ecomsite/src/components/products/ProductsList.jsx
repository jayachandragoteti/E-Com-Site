import React,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function AddProductCard() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response)=> {
                const { data } = response.data;
                setProducts(data);   
            }
            );
    },[]);    
    return (
        <Container maxWidth="lg" fixed>
            <Card>
                <CardContent>
                    <div>
                        <Typography component="h1" variant="h5">
                            My Products
                        </Typography>
                        <Grid container spacing={1}>
                            {products.map((product) => (
                                <Grid item xs key={products.id}>
                                    <ProductCard productData={product} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </CardContent>
            </Card>
        </Container>);
};
