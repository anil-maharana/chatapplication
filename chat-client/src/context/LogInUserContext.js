import React from 'react';

const LogInUserContext = React.createContext({
    firstName: '',
    lastName: '',
    email: '',
    userPhoto: '',
    description: ''
});

const LogInUserContextProvider = LogInUserContext.Provider;
const LogInUserContextConsumer = LogInUserContext.Consumer;

export { LogInUserContextProvider, LogInUserContextConsumer };