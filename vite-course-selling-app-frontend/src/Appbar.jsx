import { Typography } from "@mui/material";
import Button from "@mui/material";


function Appbar() {
    return  <div style={{display:"flex",
                justifyContent:"center"
    }}>
        <div style={{backgroundcolor:"white"}}>
        <Typography variant={"h6"}>
        Coursera---
    </Typography>
        </div>
    <div>
    <Button variant={"contained"}>Signup</Button>
    <Button variant={"contained"}>Signin</Button>
    </div>
    
   </div>
}

export default Appbar;