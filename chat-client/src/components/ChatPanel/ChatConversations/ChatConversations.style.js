import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        margin: '0px 16px',
        height: '70vh',
    },
    chatConversations: {
        height: "530px",
        minHeight: "530px",
        overflowY: "auto"
    }
}));

export default useStyles;