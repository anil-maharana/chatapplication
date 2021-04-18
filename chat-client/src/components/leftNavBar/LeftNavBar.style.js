import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 80;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: "hidden",
    },
    root: {
        minWidth: "24px",
        marginTop: 0,
    },
    IconDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

export { useStyles };