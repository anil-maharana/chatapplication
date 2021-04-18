import React from "react";
import Grid from "@material-ui/core/Grid";
import ChatPanelHeader from "./ChatPanelHeader/ChatPanelHeader";
import ChatConversations from "./ChatConversations/ChatConversations";
import useStyles from "./ChatPanel.style";
import { ChatTextBox } from "./ChatTextBox";
const ChatPanel = () => {
  const classes = useStyles();
  const _chatConversations = [
    {
      chatId: 1,
      chatMessage: "Hello, Good Morning..",
      chatDateAndTime: new Date(),
      chatUserId: 1,
      chatType: "incoming",
    },
    {
      chatId: 2,
      chatMessage: "How are you?..",
      chatDateAndTime: new Date(),
      chatUserId: 1,
      chatType: "incoming",
    },
    {
      chatId: 3,
      chatMessage: "I am Fine, good..",
      chatDateAndTime: new Date(),
      chatUserId: 2,
      chatType: "outgoing",
    },
    {
      chatId: 4,
      chatMessage: "how is everything..",
      chatDateAndTime: new Date(),
      chatUserId: 2,
      chatType: "outgoing",
    },
    {
      chatId: 5,
      chatMessage: "all good..",
      chatDateAndTime: new Date(),
      chatUserId: 1,
      chatType: "incoming",
    },
    {
      chatId: 6,
      chatMessage: "great..",
      chatDateAndTime: new Date(),
      chatUserId: 2,
      chatType: "outgoing",
    },
  ];
  return (
    // <Grid container spacing={1} style={{ height: "100%" }}>
    //   <Grid item xs={12} style={{ height: "10%" }}>
    //     <ChatPanelHeader />
    //   </Grid>
    //   <Grid
    //     item
    //     xs={12}
    //     className={classes.ChatConversations}
    //     style={{ height: "70%" }}
    //   >
    //     <ChatConversations chatConversations={_chatConversations} />
    //   </Grid>
    //   <Grid item xs={12} style={{ height: "10%" }}>
    //     <ChatTextBox />
    //   </Grid>
    // </Grid>
    <div className={classes.flexContainer}>
      <div className={classes.ChatHeader}>
        <ChatPanelHeader />
      </div>
      <div className={classes.chatConversations}>
        <ChatConversations chatConversations={_chatConversations} />
      </div>
      <div className={classes.chatFooter}>
        <ChatTextBox />
      </div>
    </div>
  );
};

export default ChatPanel;
