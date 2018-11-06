import React from 'react';
import connect from "react-redux/es/connect/connect";
import * as actions from '../../scenes/ItemDetails/services/actions';
import {browseItemsLoad, browseItemsLoadCancel} from "../../scenes/BrowseItems/services/actions";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    card: {
        border: 0,
        maxWidth: 400,

    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
    actions: {
        display: 'flex'
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Item extends React.Component {

    toggleFavorite = () => {
        this.props.itemToggleFavorite(this.props.item.id)
    };

    render() {
        const {classes, item} = this.props;
        let price = item.price ? item.price.amounts.USD : null;

        return (
            <Card className={classes.card}>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites" onClick={this.toggleFavorite}>
                        <FavoriteIcon color={item.isFavorite ? 'secondary' : 'action'}/>
                    </IconButton>
                </CardActions>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title={item.title}
                />
                <CardContent>
                    <Typography component="p">{item.title}</Typography>
                    <Typography component="p">{price}</Typography>
                    <Typography component="p">
                        Measurements: {item.measurements.display}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">
                        Purchase
                    </Button>
                    <Button variant="contained" color="primary">
                        Make Offer
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography component="p">
                        {item.description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography component="p">
                        Creator: {item.creators}
                    </Typography>
                </CardContent>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Item));