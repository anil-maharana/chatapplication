import React from "react";
import useStyles from "./UserProfile.style";
import { Avatar, Typography } from "@material-ui/core";

const UserProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.userProfile}>
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
      <div className={classes.userProfileDetails}>
        <Typography className={classes.userProfileName} variant="body1">
          Maharana, Anil
        </Typography>
        <Typography
          className={classes.userProfileDescription}
          variant="subtitle2"
        >
          Software Engineer
        </Typography>
      </div>
    </div>
  );
};

export default UserProfile;
