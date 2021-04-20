import React from "react";
import Grid from "@material-ui/core/Grid";
import ChatPanelHeader from "./ChatPanelHeader/ChatPanelHeader";
import ChatConversations from "./ChatConversations/ChatConversations";
import useStyles from "./ChatPanel.style";
import { ChatTextBox } from "./ChatTextBox";
const ChatPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <div className={classes.ChatHeader}>
        <ChatPanelHeader />
      </div>
      <div className={classes.chatConversations}>
        <ChatConversations />
      </div>
      <div className={classes.chatFooter}>
        <ChatTextBox />
      </div>
    </div>
  );
};

export default ChatPanel;
