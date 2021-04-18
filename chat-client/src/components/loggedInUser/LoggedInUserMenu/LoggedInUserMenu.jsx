import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { green, red, yellow } from "@material-ui/core/colors";
import { UserProfile } from "..";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    // width: "330px",
  },
}))(MenuItem);

export default function LoggedInUserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openStatusList, setOpenStatusList] = React.useState(true);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleStausListClick = () => {
    setOpenStatusList(!openStatusList);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={"customized-menu"}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <UserProfile />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItem onClick={handleStausListClick}>
            <ListItemText primary="Set Status" />
            {openStatusList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </MenuItem>
        <MenuItem>
          <Collapse in={openStatusList} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItem button>
                <ListItemIcon>
                  <CheckCircleIcon style={{ color: green[500] }} />
                </ListItemIcon>
                <ListItemText primary="Available" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: red[500] }} />
                </ListItemIcon>
                <ListItemText primary="Busy" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <RemoveCircleIcon style={{ color: red[500] }} />
                </ListItemIcon>
                <ListItemText primary="Do not disturb" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccessTimeIcon style={{ color: yellow[500] }} />
                </ListItemIcon>
                <ListItemText primary="Appear away" />
              </ListItem>
            </List>
          </Collapse>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SpeakerNotesIcon color="primary" />
          </ListItemIcon>
          <ListItemText>Set Status Message</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />

        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
