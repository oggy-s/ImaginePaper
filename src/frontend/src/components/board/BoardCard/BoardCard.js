import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const styles = theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  favoritePost: {
    color: '#f50057',
  }
});

class BoardCard extends React.Component {
  state = { expanded: false,  favorite: false};

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleFavoriteClick = () => {
    this.setState(state => ({ favorite: !state.favorite }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton
                className={classnames(classes.expand, {
                  [classes.favoritePost]: this.state.favorite,
                })}
                onClick={this.handleFavoriteClick}
                aria-favorite={this.state.favorite}
                aria-label="즐겨찾기"
            >
              <StarIcon />
            </IconButton>
          }
          title='타이틀'
          subheader="September 14, 2016"
        />
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
        <Collapse in={!this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" noWrap="true">
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
          </CardContent>
        </Collapse>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Share">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ThumbDownIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

BoardCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BoardCard);