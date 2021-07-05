import React from 'react'
import { Grid } from '@material-ui/core'

const ImageGrid = ({ images, onSelect, selectedImage }) => {
    return (
        <Grid container direction='column'>
            {
                images.map((image, index) => (
                    <img src={image} onClick={() => onSelect(index)} height={80} style={{ cursor: "pointer", border: index === selectedImage ? 'solid 1px black' : 'solid 1px #eee' }} />
                ))
            }
        </Grid>
    )
}
export default ImageGrid;