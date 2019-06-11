import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import './FavoCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import CardMedia from '@material-ui/core/CardMedia';
// import Avatar from '@material-ui/core/Avatar';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import clsx from 'clsx';

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
    },
    likeActive: {
        color: '#4267b2',
    },
    dislikeActive: {
        color: '#91b6ff',
    },
});

class FavoCard extends React.Component {
    state = { expanded: false, favorite: true, like: false, dislike: false};

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    handleFavoriteClick = () => {
        this.setState(state => ({ favorite: !state.favorite }));
    };
    handleLikeClick = (e) => {
        if (this.state.dislike) {
            this.setState(state => ({ like: !state.like, dislike: !state.dislike }));
        } else {
            this.setState(state => ({ like: !state.like }));
        }
    };
    handleDislikeClick = (e) => {
        if (this.state.like) {
            this.setState(state => ({ like: !state.like, dislike: !state.dislike }));
        } else {
            this.setState(state => ({ dislike: !state.dislike }));
        }
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
                        {/* <StarIcon /> */}
                        <FavoriteIcon/>
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
            {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    이곳에 간단하게 내용을 보여줍니다. 무엇인지 알아야 하니까~?
                    돈까스가 먹고싶은건 저뿐인가요?
                    바삭바삭 돈까스으~~
                </Typography>
            </CardContent> */}
            <Collapse in={!this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" noWrap="true">
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                </CardContent>
            </Collapse>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Like"
                    className={classnames(classes.root, {
                        [classes.likeActive]: this.state.like,
                    })}
                    onClick={this.handleLikeClick}
                    aria-label="Like"
                >
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="Dislike"
                    className={classnames(classes.root, {
                        [classes.dislikeActive]: this.state.dislike,
                    })}
                    onClick={this.handleDislikeClick}
                    aria-label="Dislike"
                >
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
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
    }
}

FavoCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavoCard);

