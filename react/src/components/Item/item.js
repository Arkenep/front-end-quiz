import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = () => ({
    card: {
        border: 0
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {

    render() {
        const { classes, item } = this.props;
        let price = item.price ? item.price.amounts.USD : null;

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                />
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography component="p">{price}</Typography>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);