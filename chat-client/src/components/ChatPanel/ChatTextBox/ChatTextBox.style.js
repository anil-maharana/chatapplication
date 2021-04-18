import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    divider: {
        margin: "8px 16px"
    },
    textBoxContainer: {
        padding: "16px 8px",
    },
    textBoxItem: {
        backgroundColor: "white", border: "1px solid #ffff"
    },
    paper: {
        display: 'flex',
        margin: '0px 16px',

    },
}));
export default useStyles;