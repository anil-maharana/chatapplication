import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    userProfile: {
        display: 'flex',
        padding: "5px 10px"
    },
    userProfileDetails: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10px",
    },
    userProfileName: {},
    userProfileDescription: {
        fontSize: "0.8rem",
    },

    margin: {
        margin: theme.spacing(1),
    },
    customBadge: {
        backgroundColor: "#00AFD7",
        color: "white",
    },
}));
export default useStyles;