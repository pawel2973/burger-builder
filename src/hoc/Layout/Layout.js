import React, {Component} from 'react';
import classes from './Layout.module.css';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

/**
 * Stateful class Based component
 * Responsible for main application layout
 */
class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToogleClicked={this.sideDrawerToogleHandler}/>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;