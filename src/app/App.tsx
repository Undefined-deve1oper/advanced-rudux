import React, { useEffect } from "react";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreators";

const App = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector(
        (state) => state.userReducer
    );

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
            <PostContainer />
            <PostContainer2 />
        </div>
    );
};

export default App;
