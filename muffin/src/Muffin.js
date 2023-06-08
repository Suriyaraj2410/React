 import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Muffin(props) {
    const [count,setcount]=useState(props.stock)
    const [today,settoday]=useState(props.today)
    const total=props.stock
function counting(){
    if(count<=0){
        setcount(0)
    }
    else{
        setcount(count-1)
    }
    if(total !== today){
        settoday(today+1)
    }
}

  return (
    <Card sx={{ minWidth: 250 }} className="card">
      <CardMedia
        sx={{ height: 170 }}
        image={props.image}
        title={props.name}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Stock available {count}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Today's sale  {today}
        </Typography>
      </CardContent>
      <CardActions className="button">
        <Button size="small" onClick={counting}>BUY</Button>
      </CardActions>
    </Card>
  );
}
