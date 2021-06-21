import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function MainFeaturedPost() {
    const product =
    {
        "id": 1,
        "name": "Product-1",
        "description": "description-1",
        "mrp": 1,
        "sp": 1,
        "category": "category-1",
        "images": [
            "https://jayachandragoteti.github.io/assets/img/hobbies/team_up.svg",
            "https://jayachandragoteti.github.io/assets/img/hobbies/team_up.svg",
            "https://jayachandragoteti.github.io/assets/img/hobbies/team_up.svg"
        ]
    }
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${ product.images[0] })` }}>
            {/* Increase the priority of the hero background images */}
            {<img style={{ display: 'none' }} src={product.images[0]} alt={product.name} />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {product.description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    product: PropTypes.object,
};