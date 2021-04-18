import React, { useState } from 'react'
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Route, Switch } from "react-router-dom";
import { LeftNavBar } from './components/leftNavBar';
import { Home } from "./components/home";
import { ChatAppBar } from "./components/chatAppBar";
import { Channel } from "./components/Channel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(2),
  },
}))


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ChatAppBar />
      <LeftNavBar />
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact from="/Home" render={props => <Home {...props} />} />
          {/* <Route exact path="/ChatSummary" render={props => <ChatSummary {...props} />} />*/}
          <Route exact path="/Channel" render={props => <Channel {...props} />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
