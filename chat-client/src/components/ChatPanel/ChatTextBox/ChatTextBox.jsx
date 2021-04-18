import React from "react";
import { Grid, IconButton, TextField, Paper } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./ChatTextBox.style";

function ChatTextBox() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={1} className={classes.textBoxContainer}>
          <Grid item xs={1}>
            <IconButton>
              <EmojiEmotionsIcon color="primary" />
            </IconButton>
          </Grid>
          <Grid item xs={10} className={classes.textBoxItem}>
            <TextField
              placeholder="Type a new message"
              style={{ width: "100%" }}
            ></TextField>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <SendIcon color="action" />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ChatTextBox;
