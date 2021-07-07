import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin:"25px 0"
  },
  media: {
    height: 140,    
    backgroundSize:"contain"
  },
});

export default function BlogCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick = {() => props.postClicked(props.post)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.post.imgurl}  
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.post.content ? props.post.content.substring(0, 45) + "..." : null}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
