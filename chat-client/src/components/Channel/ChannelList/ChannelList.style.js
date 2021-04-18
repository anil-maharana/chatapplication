import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    nested: {
        paddingLeft: theme.spacing(5),
        textAlign: "left",
    },

}));

export default useStyles;