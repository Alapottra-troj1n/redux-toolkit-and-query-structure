import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/users/usersSlice';

const Users = () => {

    const {users, isLoading, isError, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log(users, isLoading, isError, error)

    useEffect(() => {

        dispatch(getUsers());
    },[])

    return (
        <div>
            hello world
        </div>
    );
};

export default Users;