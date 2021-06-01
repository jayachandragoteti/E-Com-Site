import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';

const Login = (props) =>{
    return (<div>
        <h1>Login Component</h1>
        <form noValidate autoComplete="off">
            <Card className="card">
                <CardContent>
                    <Grid spacing={3}>
                        <Grid  item xs={12}>
                        <Paper className="input-field" ><TextField id="user-name" label="User Name" variant="outlined" /></Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className="input-field"><TextField id="password" label="Password" variant="outlined" type="password" /></Paper>
                        </Grid>
                    </Grid>  
                </CardContent>
            </Card>
        </form>
</div>    );
};

export default Login;