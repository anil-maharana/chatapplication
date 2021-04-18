import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Divider, IconButton } from "@material-ui/core";

import { ChannelService, ChatService } from "../../../services";

import { NewChannel } from "../NewChannel";
import { ChannelList } from "../ChannelList";
import { DirectMessageList } from "../../DirectMessage/DirectMessageList";

// import DirectMessageList from "./DirectMessageList";
import useStyles from "./ChannelLeftNavBar.style";

const ChannelLeftNavBar = () => {
  const classes = useStyles();
  const [channelList, setChannelList] = React.useState([]);
  const [openChannel, setOpenChannel] = React.useState(true);
  const [addChannelDialog, setAddChannelDialog] = React.useState(false);
  const [openDirectMessage, setOpenDirectMessage] = React.useState(true);

  React.useEffect(async () => {
    console.log("channelLeftNavbar - useEffect called.");
    const _channelsFromApi = await ChannelService.getAllChannels();
    setChannelList(_channelsFromApi);
  }, []);

  const handleChannelOpenClick = () => {
    setOpenChannel(!openChannel);
  };

  const handleDirectMessageOpenClick = () => {
    setOpenDirectMessage(!openDirectMessage);
  };

  const addChannel = () => {
    setAddChannelDialog(true);
  };

  const handleAddChannel = async (val) => {
    console.log(val);
    setAddChannelDialog(false);
    if (val) {
      const _channelsFromApi = await ChannelService.getAllChannels();
      setChannelList(_channelsFromApi);
    }
  };
  const addDirectMessage = () => {
    alert("Add Direct Message");
  };

  const _directMessages = ["user-1", "user-2", "user-3"];

  return (
    <React.Fragment>
      <div className={classes.ChannelLeftNavBar}>
        <List component="nav" className={classes.root}>
          <ListItem onClick={handleChannelOpenClick} key={"ChannelList"}>
            {openChannel ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary="Channels" />
            <ListItemSecondaryAction style={{ right: 0 }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={addChannel}
              >
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <Collapse in={openChannel} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ChannelList channels={channelList} />
            </List>
          </Collapse>
        </List>
        <Divider />
        <List component="nav" className={classes.root}>
          <ListItem
            onClick={handleDirectMessageOpenClick}
            key={"DirectMessageList"}
          >
            {openDirectMessage ? <ExpandLess /> : <ExpandMore />}
            <ListItemText primary="Direct Messages" />
            <ListItemSecondaryAction style={{ right: 0 }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={addDirectMessage}
              >
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <Collapse in={openDirectMessage} timeout="auto" unmountOnExit>
            <List component="div">
              <DirectMessageList directMessages={_directMessages} />
            </List>
          </Collapse>
        </List>
      </div>
      {addChannelDialog && (
        <NewChannel
          isAddChannelDialogOpen={addChannelDialog}
          onAddChannelDialogClose={(val) => handleAddChannel(val)}
        />
      )}
    </React.Fragment>
  );
};

export default ChannelLeftNavBar;
