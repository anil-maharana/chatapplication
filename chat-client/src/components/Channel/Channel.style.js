import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(5),
        textAlign: "left",
    },
    ChannelLeftNavBar: {
        height: "100%",
        minHeight: "100%",
        // position: "absolute",
        backgroundColor: "white",
        borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        borderRightColor: theme.palette.grey,
    },
}));

export default useStyles;