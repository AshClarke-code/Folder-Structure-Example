import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { setCurrentUserStart } from "../../redux/user/user.actions";
import "./user-heading.styles.scss";


const UserHeading = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        dispatch(setCurrentUserStart());
      }, [dispatch]);


    return (
    <h1>{user ? user.name : `Loading`}</h1>
)};

export default UserHeading;