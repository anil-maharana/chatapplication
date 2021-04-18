import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { useStyles, styles } from "./NewChannel.style";

import { useFormik } from "formik";
import * as yup from "yup";
import { FormHelperText } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import ChannelService from "../../../services/ChannelService";

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const initialChannelValues = {
  channelTitle: "",
  ChannelUsers: "",
  channelType: "",
};

const channelFormValidationScheme = yup.object({
  channelTitle: yup
    .string("Enter Channel Title.")
    .required("Channel Title is required"),
  // ChannelUsers: yup
  //   .array()
  //   .min(1, "Please select one User")
  //   .required("Users are required."),
  ChannelUsers: yup.string("Enter Users").required("Users are required."),
  channelType: yup
    .string("Select Channel Type")
    .required("Channel Type is required"),
});

export default function NewChannel({
  isAddChannelDialogOpen,
  onAddChannelDialogClose,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isAddChannelDialogOpen);
  const [isDataLoading, setDataLoading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    onAddChannelDialogClose(false);
  };

  const handleChannelFormSubmit = async (data) => {
    setDataLoading(true);
    const { status, statusText } = await ChannelService.createChannel({
      title: data.channelTitle,
      users: data.ChannelUsers,
      type: data.channelType,
    });
    if (status === 200 && statusText == "OK") {
      setDataLoading(false);
      setOpen(false);
      onAddChannelDialogClose(true);
    }
  };

  const formik = useFormik({
    initialValues: initialChannelValues,
    validationSchema: channelFormValidationScheme,
    onSubmit: (values) => {
      handleChannelFormSubmit(values);
    },
  });
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Add Channel
          </DialogTitle>
          <DialogContent dividers>
            <Grid container alignContent="flex-start" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="channelTitle"
                  name="channelTitle"
                  label="Title"
                  value={formik.values.channelTitle}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.channelTitle &&
                    Boolean(formik.errors.channelTitle)
                  }
                  helperText={
                    formik.touched.channelTitle && formik.errors.channelTitle
                  }
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="ChannelUsers"
                  name="ChannelUsers"
                  label="Users"
                  value={formik.values.ChannelUsers}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.ChannelUsers &&
                    Boolean(formik.errors.ChannelUsers)
                  }
                  helperText={
                    formik.touched.ChannelUsers && formik.errors.ChannelUsers
                  }
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  error={
                    formik.touched.channelType &&
                    Boolean(formik.errors.channelType)
                  }
                >
                  <FormLabel component="legend">Channel Type</FormLabel>
                  <RadioGroup
                    aria-label="Channel Type"
                    id="channelType"
                    name="channelType"
                    value={formik.values.channelType}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="private"
                      control={<Radio />}
                      label="Private"
                    />
                    <FormControlLabel
                      value="Public"
                      control={<Radio />}
                      label="Public"
                    />
                  </RadioGroup>
                  {formik.touched.channelType &&
                    Boolean(formik.errors.channelType) && (
                      <FormHelperText>
                        {formik.errors.channelType}
                      </FormHelperText>
                    )}
                </FormControl>
              </Grid>
            </Grid>
            {/* <div>
              <Backdrop className={classes.backdrop} open={isDataLoading}>
                <CircularProgress color="inherit" />
              </Backdrop>
            </div> */}
            {isDataLoading && <CircularProgress color="inherit" />}
          </DialogContent>
          <DialogActions>
            <Button autoFocus type="submit" variant="outlined" color="primary">
              Save changes
            </Button>
            <Button
              autoFocus
              onClick={handleClose}
              variant="outlined"
              color="secondary"
            >
              close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
