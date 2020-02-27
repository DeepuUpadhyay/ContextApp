import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {   
    const [state,setState]=useState({isAuthenticated:false});

    const toggleAuth=()=>{
        const isAuthe= state.isAuthenticated
    setState(state=>({...state,isAuthenticated:!isAuthe}))
}

    return (
        <AuthContext.Provider value={{...state,toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
