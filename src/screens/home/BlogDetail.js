import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'
const useStyles = makeStyles({
  root: {
    maxWidth:600,
    width:"100%",
    margin:"25px 0"
  },
  media: {
    height: 300,
    backgroundSize:"contain"
  },
  blogDetailContainer: {
      display:"flex",
      justifyContent:"center"
  }
});

export default function BlogDetail(props) { 
  const classes = useStyles();

  return (
    <div className = {classes.blogDetailContainer}>
        <Card className={classes.root}>
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
                    {props.post.content ? props.post.content : null}
                </Typography>
                {
                    props.post.tags.map(tag => {
                        return(
                            <Chip style={{margin:"15px 5px"}} label = {tag} />
                        )
                    })
                }
                </CardContent>
            </CardActionArea>
        
        </Card>
    </div>
  );
}
