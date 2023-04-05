import * as React from 'react';
import {Avatar, Grid, Button, Paper, TextField,Typography,Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';

const Myapp=()=>{
   
  const paperstyle={padding:40, width:280, margin:'20px auto'}
  const avatarstyle = {backgroundColor:'green'}
  const btnstyle = {margin:'20px 0px'}
  const navigate = useNavigate()
  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avatarstyle}>
            <LockIcon />
          </Avatar>
          <h2>Register Form </h2>
        </Grid>
        <Grid margin="15px 0px">
        <TextField
          variant="standard"
          label="Firstname"
          placeholder="Enter Your Firstname"
          fullWidth
        />
        </Grid>
        <Grid margin="15px 0px">
        <TextField
          variant="standard"
          label="Lastname"
          placeholder="Enter Your Lastname"
          fullWidth
        />
        </Grid>
        <Grid margin="15px 0px">
        <TextField
          variant="standard"
          label="Email"
          placeholder="Enter Your Email"
          fullWidth
        />
        </Grid>
        <Grid margin="15px 0px">
        <TextField
          variant="standard"
          label="Password"
          type="password"
          placeholder="Enter Password"
          fullWidth
        />
        </Grid>
     
        
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button onClick={()=>navigate('Dashboard')} variant="contained" color="primary" style={btnstyle} fullWidth>
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forget password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?<Link href="#">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );

}

export default Myapp