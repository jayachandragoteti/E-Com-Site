import React from 'react'
import { Divider, Grid, Typography, Box, IconButton, Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from "@material-ui/icons/Share";
import CardActions from '@material-ui/core/CardActions';

const Info = ({ id, name, description, mrp, sp, category }) => {
    return (
        <Grid container direction='column' style={{ height: '100%' }}>
            <Typography variant='subtitle1'></Typography>
            <Divider />
            <Box mt={2}>
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='subtitle1'>{description}</Typography>
                <Typography variant='h5'>{sp}/-</Typography>
            </Box>
            <Button variant='contained' color='primary' style={{ marginTop: 'auto ' }}>Buy</Button>
            <CardActions>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton color="primary" aria-label="Share product">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="add to favorites" color="primary">
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Grid>
    )
}
Info.defaultProps = {
    name: 'Product-Name',
    description: 'Product-description',
    sp: 4000
}
export default Info;