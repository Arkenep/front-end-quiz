import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browseItemsLoad, browseItemsLoadCancel} from './services/actions';
import Button from '@material-ui/core/Button';
import BrowseGrid from "../../components/GridComponent/GridComponent";
import * as actions from './services/actions';


class BrowseItemsScene extends Component {

    componentDidMount() {
        this.props.onQueryChange(0);
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onCancel();
    }

    handleBrowseItemsLoad = () => {
        this.props.onLoad();
    };

    handleChange = () => {
        let current = this.props.query;
        let totalItems = this.props.items ? this.props.items.totalItems : null;
        this.props.onQueryChange(totalItems > current + 9 ? current + 9 : current);
    };

    render() {
        const {items, loading, error} = this.props;

        return (
            <div>
                <h1>Browse page</h1>
                {loading ? <div>Loading</div> : null}
                {error ? <div>Error</div> : null}
                {items ? <BrowseGrid items={items.items}/> : 'Nothing to load'}
                <Button variant="contained"
                        color="primary"
                        onClick={this.handleChange}>
                    Load More
                </Button>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {query, items, loading, error} = state.browseItems;
    return {
        query,
        items,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(browseItemsLoad()),
        onCancel: () => dispatch(browseItemsLoadCancel()),
        onQueryChange: (query) => dispatch(actions.browseItemsQueryChange(query))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseItemsScene);