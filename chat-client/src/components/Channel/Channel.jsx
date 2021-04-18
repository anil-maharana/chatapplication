import { Grid } from "@material-ui/core";
import React from "react";
import ChannelLeftNavBar from "./ChannelLeftNavBar/ChannelLeftNavBar";

import useStyles from "./Channel.style";
import { ChatPanel } from "../ChatPanel";

const Channel = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <ChannelLeftNavBar />
      </Grid>
      <Grid item xs={10}>
        <ChatPanel />
      </Grid>
    </Grid>
  );
};

export default Channel;
