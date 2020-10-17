import React from 'react'
import { connect } from 'react-redux'
import NavBar from './nav_bar'
import {logout} from '../../actions/session_action'

const mSTP = state => ({
    currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    logout: () => dispatch(logout())
});

export default connect(mSTP,mDTP)(NavBar)