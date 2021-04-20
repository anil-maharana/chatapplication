import React, { useState, useEffect, useRef } from "react";
import { CircularProgress, Grid, Typography, Button } from "@material-ui/core";

import Chat from "../Chat/Chat";
import useStyles from "./ChatConversations.style";

import { ChatService } from "../../../services";

import useGetChats from "./useGetChats";

function ChatConversations() {
  const lastMessageRef = useRef();
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, hasMore, chats, error } = useGetChats(pageNumber);
  function handleLoadMoreChats() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    console.log("called");
    scrollToBottom();
  }, [chats]);

  return (
    <Grid container spacing={1} className={classes.chatConversations}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div style={{ display: "grid" }}>
          {!loading && (
            <Button color="primary" onClick={handleLoadMoreChats}>
              Load More
            </Button>
          )}
          {loading && <CircularProgress size={20} />}
          {error && <Typography>Error in Loading Conversations</Typography>}
        </div>
        {chats.map((value, index) => {
          if (chats.length === index + 1) {
            return (
              <Grid item key={`${value._id}`} ref={lastMessageRef}>
                <Chat
                  chatDetails={{
                    chatId: value._id,
                    chatMessage: value.message,
                    chatDateAndTime: new Date(value.createdAt),
                    chatUserId: value ? value.from : "",
                    // chatType: i % 2 == 0 ? "incoming" : "outgoing",
                    chatType: "outgoing",
                  }}
                ></Chat>{" "}
              </Grid>
            );
          } else {
            return (
              <Grid item key={`${value._id}`}>
                <Chat
                  chatDetails={{
                    chatId: value._id,
                    chatMessage: value.message,
                    chatDateAndTime: new Date(value.createdAt),
                    chatUserId: value ? value.from : "",
                    // chatType: i % 2 == 0 ? "incoming" : "outgoing",
                    chatType: "outgoing",
                  }}
                ></Chat>
              </Grid>
            );
          }
        })}
        {/* <button type="button" onClick={handleLoadMoreChats}>
          Load More
        </button>
        <div>
          {chats.map((item, index) => {
            return (
              <div>
                {index}-{item.message}
              </div>
            );
          })}
        </div> */}
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default ChatConversations;
