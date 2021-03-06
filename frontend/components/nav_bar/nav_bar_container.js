import React from 'react'
import { connect } from 'react-redux'
import NavBar from './nav_bar'
import {login, logout, clearErrors} from '../../actions/session_action'
import {withRouter} from 'react-router-dom'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUserId], 
    errors: state.errors.login
});

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    logout: () => dispatch(logout()), 
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mSTP,mDTP)(NavBar));