import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemLoad, itemLoadCancel} from './services/actions';
import NavItem from "../../components/NavItem/NavItem";
import Item from "../../components/Item/Item";


class ItemDetailsScene extends Component {

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onCancel();
    }

    render() {
        const {item, loading, error} = this.props;

        return (
            <div>
                {loading ? <div>Loading</div> : null}
                {error ? <div>Error</div> : null}
                {<NavItem to={'/'}>Home</NavItem>}
                {item ? <Item/> : 'Nothing to Load'}
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