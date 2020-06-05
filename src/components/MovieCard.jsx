import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Chip } from "@material-ui/core";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MovieCard({
  imageMovie,
  descriptionMovie,
  titleMovie,
  movieTitle,
  mediaType,
  votes,
  id,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className={classes.root}
      style={{
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        height: "560px",
        width: "355px",
      }}
    >
      <LazyLoad height={200}>
        <CardMedia
          className={classes.media}
          image={imageMovie}
          title={titleMovie}
          style={{ paddingTop: "75%" }}
        />
      </LazyLoad>
      <Link to={`/${mediaType}/${id}`}>
        <CardHeader title={titleMovie || movieTitle} />
      </Link>
      <CardContent style={{ height: "150px" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {descriptionMovie}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Chip label={mediaType.toUpperCase()} />
      </CardActions>
    </Card>
  );
}
