import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from "../Item/item";

const styles = theme => ({
    root: {
        maxWidth: 800,
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class CenteredGrid extends React.Component {
    render() {
        const {classes, items} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    {items.map((item, index) => {
                        return (
                            <Grid key={index} item xs={4}>
                                <Paper className={classes.paper}>
                                    <RecipeReviewCard item={item}/>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);