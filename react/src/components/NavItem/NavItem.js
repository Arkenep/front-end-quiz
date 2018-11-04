import React from 'react';
import {withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";

const NavItem = withRouter(({match, location, history, to, children}) => {
    const onClick = () => {
        history.push(to)
    };
    const isActive = location.pathname === to;
    return (
        <Button variant="contained"
                color="primary"
                className={isActive ? 'active' : null}
                onClick={onClick}>{children}
        </Button>

    );
});

export default NavItem;
