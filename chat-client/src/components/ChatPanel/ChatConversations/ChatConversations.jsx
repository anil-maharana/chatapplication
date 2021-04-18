import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Chat from "../Chat/Chat";
import useStyles from "./ChatConversations.style";

import { ChatService } from "../../../services";

function ChatConversations({ chatConversations }) {
  const classes = useStyles();
  const [chats, setchats] = React.useState([]);

  React.useEffect(async () => {
    const chats = await ChatService.getAllChats();
    setchats(
      chats.map((chat, i) => ({
        chatId: chat.id,
        chatMessage: chat.message,
        chatDateAndTime: new Date(chat.createdAt),
        chatUserId: Chat.from,
        chatType: i % 2 == 0 ? "incoming" : "outgoing",
      }))
    );
  }, []);
  return (
    <Grid container spacing={1} className={classes.chatConversations}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        {chatConversations.length > 0 ? (
          // chatConversations.map((value, index) => (
          //   <Grid item key={`key-${index}`}>
          //     <Chat chatDetails={value}></Chat>
          //   </Grid>
          // ))
          chats.map((value, index) => (
            <Grid item key={`key-${index}`}>
              <Chat chatDetails={value}></Chat>
            </Grid>
          ))
        ) : (
          <div>
            <Typography variant="h6">
              You're starting a new conversation
            </Typography>
            <Typography variant="subtitle2">
              Type your first message below.
            </Typography>
          </div>
        )}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default ChatConversations;
