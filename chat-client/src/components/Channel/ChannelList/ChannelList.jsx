import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./ChannelList.style";

const ChannelList = ({ channels }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index, item) => {
    console.log(item);
    console.log(event);
    setSelectedIndex(index);
  };
  return (
    <List component="nav" disablePadding>
      {channels.map((item, index) => (
        <ListItem
          className={classes.nested}
          key={item.id}
          button
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index, item)}
        >
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChannelList;
