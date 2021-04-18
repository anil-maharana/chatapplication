import React from "react";
import { Typography, Divider, IconButton, Avatar } from "@material-ui/core";
import { Call, VideoCall, ScreenShare } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

function ChatPanelHeader() {
  return (
    <div style={{ margin: "8px 16px" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3 }}>
          <div style={{ display: "flex" }}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </StyledBadge>
            <Typography variant="h5" style={{ padding: "8px" }}>
              Maharana, Anil
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Call />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <VideoCall />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <ScreenShare />
          </IconButton>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default ChatPanelHeader;
