import React from "react";

import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import HomeIcon from "@material-ui/icons/Home";
import LinkIcon from "@material-ui/icons/Link";
import ChatIcon from "@material-ui/icons/Chat";
import { withRouter } from "react-router";

import { useStyles } from "./LeftNavBar.style";

const LeftNavBar = (props) => {
  const classes = useStyles();
  const { history } = props;
  const leftNavBarItemList = [
    {
      text: "home",
      icon: <HomeIcon color="primary" />,
      onclick: () => history.push("/"),
    },
    {
      text: "Chat",
      icon: <ChatIcon color="primary" />,
      onclick: () => history.push("/ChatSummary"),
    },
    {
      text: "Channel",
      icon: <LinkIcon color="primary" />,
      onclick: () => history.push("/Channel"),
    },
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {leftNavBarItemList.map((item, index) => {
            const { text, icon, onclick } = item;
            return (
              <ListItem
                alignItems="center"
                button
                key={text}
                onClick={onclick}
                divider
              >
                <div>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <span>{text}</span>
                </div>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default withRouter(LeftNavBar);
