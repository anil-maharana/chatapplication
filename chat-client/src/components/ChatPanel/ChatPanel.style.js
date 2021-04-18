
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    chatConversations: {
        // minHeight: "620px",
        // overflowY: "auto",
        // height: "620px"
    },

    flexContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        alignItems: "stretch",
    },

    ChatHeader: {
        order: 0,
        flex: '0 1 auto',
        alignSelf: "auto",
    },

    ChatConversations: {
        order: 0,
        flex: '0 1 auto',
        alignSelf: "auto",
        height: '250px'
    },

    chatFooter: {
        order: 0,
        flex: '0 1 auto',
        alignSelf: "auto",
    }
}));

export default useStyles;