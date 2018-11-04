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
                {loading ? <div>Loading</div> : null}
                {error ? <div>Error</div> : null}
                {item ? <h3>{item.title}</h3> : 'Nothing to Load'}
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