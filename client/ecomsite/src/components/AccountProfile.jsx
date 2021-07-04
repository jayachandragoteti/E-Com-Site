import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  car:{
    minWidth: '100%',
    width: '80%',
    marginTop:'20%',
  },
  cover: {
    width: 151,
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <CssBaseline />
      <Container maxWidth="sm">
      <Card className={classes.car}>
      <CardActionArea>
      <CardMedia
          component="img"
          alt="user image"
          height="140"
          image="/images/download.png"
          title="user image"
        />
      <CardContent>
      
      <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          required
          id="standard-text"
          label="Full Name"
          type="text"
          autoComplete=""
        />
        
        <TextField
        required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
        required
          id="standard-read-only-input"
          label="Email"
          defaultValue="meghana9111@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
        required
          id="standard-number"
          label="Phone Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
       
      </div>
      
     
    </form>
    </CardContent>
    </CardActionArea>
    </Card>
      </Container>
    </React.Fragment>
    
  );
}
