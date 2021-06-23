import React, { useState } from 'react';
import { Card, CardActionArea, Grid } from '@material-ui/core';

import ImageGrid from './ImageGrid';
import MainImage from './MainImage';
import Info from './Info';

export default function MainFeaturedPost() {
    const product = {
        "id": 4,
        "name": "Product-4",
        "description": "description-4",
        "mrp": 4,
        "sp": 4,
        "category": "category-4",
        "images": [
            "https://jayachandragoteti.github.io/assets/img/hobbies/team_up.svg",
            "https://jayachandragoteti.github.io/assets/img/hobbies/friendship.svg",
            "https://jayachandragoteti.github.io/assets/img/hobbies/shared_workspace.svg",
            "https://jayachandragoteti.github.io/assets/img/hobbies/friendship.svg",
            "https://jayachandragoteti.github.io/assets/img/hobbies/team_up.svg",
        ]
    }
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <Grid container sm={12} mt={100} justify="center">
            <Card>
                <Grid container spacing={1} style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <Grid item sm={2}>
                        <ImageGrid images={product.images} onSelect={setSelectedImage} selectedImage={selectedImage} />
                    </Grid>
                    <Grid item sm={6}>
                        <MainImage src={product.images[selectedImage]} />
                    </Grid>
                    <Grid item sm={4}>
                        <Info product={product} />
                    </Grid>
                </Grid>
            </Card>
        </Grid>

    );
}
