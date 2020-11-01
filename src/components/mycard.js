import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { getdetails } from "../api/api";
//import { BrowserRouter as Router } from 'react-router-dom';

const Ca=({match})=>{

    const [detail,setdetail]=useState({});

    const [open,setOpen]=useState(false);


    

    
    const handleClick=(id)=>{

        getdetails(id).then((data)=>{
            console.log("match ",data);
            setdetail(data);
            handleOpen();
        })
        .catch(error=>console.log(error));
        
       //alert(id);

    };
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    }

    const getmatchcart=()=>{
    return (
        <Card style={{marginTop:20}}>
            <CardContent style={{backgroundColor:'palevioletred'}}>
                <Grid container justify="center" alignItems="center" spacing={4}>
                    <Grid item> 
                    <Typography variant="h5">  
                    {match["team-1"]}
                    </Typography>
                    </Grid>
                    <Grid item>
                    <img style={{width:85}} src={require("../img/vs.png")} alt=""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">
                        {match["team-2"]}
                        </Typography>
                    </Grid>
                </Grid>
                
            </CardContent>
            <CardActions style={{backgroundColor:'palevioletred'}}>
                <Grid container justify="center">
                <Button onClick={()=>{
                    handleClick(match.unique_id);
                    
                }} variant="contained"  color="primary" style={{marginRight:5}}>
                    Show Details
                </Button>
                <Button variant="contained" color="primary" /*style={{marginTop:5}}*/>
                    Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                </Button>
                </Grid>
            </CardActions>
        </Card>

    );
    };
    
    const getdialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match details...."}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-discription">
                <Typography style={{fontWeight:"bold"}}>
                    {detail.stat==="No result"? "Match is Going on" :"Match has ended"}
                </Typography>
                <Typography>
                    <h3 style={{fontWeight:"bold"}}>Score</h3>   <span>{detail.score}</span>
                </Typography>


            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
    
    return (
        <fragment>
            {getmatchcart()}
            {getdialog()}
           
            
        </fragment>
    ); 
   // return getmatchcart(); 
};

export default Ca;