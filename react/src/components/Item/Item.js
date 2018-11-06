import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";
import * as actions from '../../scenes/ItemDetails/services/actions';
import {browseItemsLoad, browseItemsLoadCancel} from "../../scenes/BrowseItems/services/actions";

//
// const styles = () => ({
//     card: {
//         border: 0,
//         maxWidth: 400,
//
//     },
//     media: {
//         height: 0,
//         paddingTop: '100%',
//     },
//     actions: {
//         display: 'flex'
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
// });

class Item extends React.Component {

    toggleFavorite = () => {
        this.props.itemToggleFavorite(this.props.item.id)
    };

    render() {
        const {item} = this.props;
        let price = item.price ? item.price.amounts.USD : null;

        return (
            <Card>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites" onClick={this.toggleFavorite}>
                        <FavoriteIcon color={item.isFavorite ? 'secondary' : 'action'}/>
                    </IconButton>
                </CardActions>
                <CardMedia

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
//
// Item.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Item);


const mapStateToProps = (state) => {
    const {item} = state.item;
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);