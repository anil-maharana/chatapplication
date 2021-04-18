import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import useStyles from "./DirectMessageList.style";

export default function DirectMessageList({ directMessages }) {
  const classes = useStyles();
  return (
    <List dense className={classes.root}>
      {directMessages.map((value, index) => {
        const labelId = `user-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${index + 1}`}
                src={`https://material-ui.com/static/images/avatar/${
                  value + 1
                }.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value}`} />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  alert("More actions");
                }}
              >
                <MoreVertIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
