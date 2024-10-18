import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signup() {
   
    return <div>
          <center>
            <div style={{
                marginTop: 200,
                marginBottom: 20}}>
               <Typography variant='h6'>Welcome to Vite-course-era
                </Typography> 
            </div>

            <Card variant="outlined" style={{width:400,padding:20}}>
    
    <TextField 
        fullWidth={true}
    id="outlined-basic" label="Email" variant="outlined" width='400px' />
        <br/><br/>
        <TextField 
        fullWidth={true}
        id="outlined-basic" label="Password" variant="outlined" type='password'/>
    <br/><br/>
    <Button variant="contained">Contained</Button>
    </Card>
        </center>
        
    </div>
       
    
}

export default Signup;