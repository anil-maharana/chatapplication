import React from "react";
import { Typography, Box, Avatar, Chip, Paper } from "@material-ui/core";
import useStyles from "./Chat.style";
import ChatMessageOption from "../ChatMessageOption/ChatMessageOption";
import parse from "html-react-parser";

function Chat(props) {
  const classes = useStyles();
  console.log(props.chatDetails);
  const {
    chatId,
    chatMessage,
    chatDateAndTime,
    chatUserId,
    chatType,
  } = props.chatDetails;

  return (
    <div>
      <Box
        display="flex"
        className={
          chatType === "incoming" ? classes.displayleft : classes.displayRight
        }
        m={1}
      >
        {chatType === "outgoing" ? (
          <Avatar
            alt={`Avatar n°${chatUserId + 1}`}
            src={`https://material-ui.com/static/images/avatar/${
              chatUserId + 1
            }.jpg`}
            className={classes.chatUserImage}
          />
        ) : null}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <Chip
            variant="outlined"
            label={chatMessage}
            className={classes.chatMessage}
            color="primary"
          ></Chip> */}
          <Paper className={classes.chatMessage} variant="outlined">
            <React.Fragment>{parse(chatMessage)}</React.Fragment>
          </Paper>
          <Typography
            variant="h6"
            className={classes.chatDateandTime}
            align="right"
          >
            {chatDateAndTime.toLocaleTimeString()}
          </Typography>
        </div>
        <ChatMessageOption />
      </Box>
    </div>
  );
}

export default Chat;
