import React from 'react';
import {Link} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";
import {withStyles} from '@material-ui/core/styles';
import {browseItemsLoad, browseItemsLoadCancel} from "../../scenes/BrowseItems/services/actions";
import * as actions from "../../scenes/ItemDetails/services/actions";
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

class GridItem extends React.Component {

    toggleFavorite = () => {
        this.props.itemToggleFavorite(this.props.passedItem.id)
    };

    render() {
        const {classes, passedItem: item} = this.props;
        let price = item.price ? item.price.amounts.USD : null;

        return (
            <Card className={classes.card}>
                <Link to={'/item/' + item.id}>
                    <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.title}
                    />
                </Link>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Typography component="p">{price}</Typography>
                    <IconButton aria-label="Add to favorites" onClick={this.toggleFavorite}>
                        <FavoriteIcon color={item.isFavorite ? 'secondary' : 'action'}/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {classes, item} = state.item;
    return {
        classes,
        item
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(browseItemsLoad()),
        onCancel: () => dispatch(browseItemsLoadCancel()),
        itemToggleFavorite: (isFavorite) => dispatch(actions.itemToggleFavorite(isFavorite))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GridItem));