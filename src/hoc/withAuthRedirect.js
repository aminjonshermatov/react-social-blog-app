import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = state => {
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = Component => {
    class RedirectComponent extends React.Component {
        render() {
            return (
                this.props.isAuth
                    ? <Component {...this.props} />
                    : <Redirect to={'/login'} />
            );
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
