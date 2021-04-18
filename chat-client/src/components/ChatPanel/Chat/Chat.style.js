import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: "5px 15px",
        color: theme.palette.text.secondary,
    },
    displayRight: {
        justifyContent: "flex-start",
    },
    displayleft: {
        justifyContent: "flex-end",
    },
    chatUserImage: {
        margin: "0px 5px",
    },
    chatMessage: {
        margin: "0px 5px",
        backgroundColor: 'white',
        padding: '8px 8px'
    },
    chatDateandTime: {
        fontSize: '0.6rem',
        margin: "2px 5px",
    }
}));

export default useStyles;