import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton, CardMedia } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

const CoffeCard = props => {
  const product = props.productData;
  return (
    <Card>
      <CardHeader
        // avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        name={product.name}
      />
      <CardMedia
        image={product.images[0]}
        title={product.name}
      />
      <CardMedia style={{ height: "150px" }} image={product.images[0]} />
      <CardContent>
        <Typography variant="body2" component="p">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <IconButton aria-label="settings">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
