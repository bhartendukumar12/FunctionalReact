import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import * as GlobalSelectors from '../state/selectors/GlobalSelectors';
import * as Actions from '../state/actions/Actions';
import PropTypes from 'prop-types';

const About = props => {
    const users = useSelector(state => GlobalSelectors.getData(state));
    const userRecord = useSelector(state => GlobalSelectors.getUserRecord(state));
    const dispatch = useDispatch();
    console.log('data', users);
    console.log('userRecord', userRecord);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        dispatch(Actions.fetchUsers())
    }, [dispatch]);

    const userCardHandler = user => {
        dispatch(Actions.fetchUser(user))
    }

    return (
        <>
            <div className='userCard-constiner'>
                {users.map((user) => (
                    <ul key={user.id} className='userCard' onClick={() => { userCardHandler(user) }}>
                        <div className='userCard-left'>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.website}</li>
                        </div>
                        <div className='userCard-right'>
                            <li>{user.address.street}</li>
                            <li>{user.address.suite}</li>
                            <li>{user.address.city}</li>
                        </div>
                    </ul>
                ))}
            </div>

            {Object.keys(userRecord).length>0 ? <div className='userCard-left'>
                <li>{userRecord.name}</li>
                <li>{userRecord.email}</li>
                <li>{userRecord.website}</li>
            </div> : null}


        </>
    );
};

About.propTypes = {
    data: PropTypes.number,
};

export default About;