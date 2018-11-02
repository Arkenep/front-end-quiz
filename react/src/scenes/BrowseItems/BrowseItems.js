import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browseItemsLoad, browseItemsLoadCancel} from './services/actions';
import Button from '@material-ui/core/Button';


class BrowseItemsScene extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onCancel();
    }

    handleBrowseItemsLoad = () => {
        this.props.onLoad();
    };

    render() {
        const {items, loading, error} = this.props;

        return (
            <div>
                <h1>Browse items</h1>
                <Button variant="contained"
                        color="primary"
                        onClick={this.handleBrowseItemsLoad}>
                    Load
                </Button>

                <hr/>

                {loading? <div>Loading</div> : null}
                {error? <div>Error</div> : null}
                {
                    <div><pre>{JSON.stringify(items, null, 2)}</pre></div>
                }

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const { items, loading, error } = state.browseItems;
    return {
        items,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(browseItemsLoad()),
        onCancel: () => dispatch(browseItemsLoadCancel())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseItemsScene);