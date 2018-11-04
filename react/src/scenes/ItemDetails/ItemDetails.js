import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemLoad, itemLoadCancel} from './services/actions';


class ItemDetailsScene extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onCancel();
    }

    handleItemLoad = () => {
        this.props.onLoad();
    };

    render() {
        const {item, loading, error} = this.props;

        return (
            <div>
                <h1>Item title</h1>

                {loading ? <div>Loading</div> : null}
                {error ? <div>Error</div> : null}
                {<div><pre>{JSON.stringify(this.props, null, 2)}</pre></div>}

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {item, loading, error} = state.item;
    return {
        item,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(itemLoad()),
        onCancel: () => dispatch(itemLoadCancel())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsScene);