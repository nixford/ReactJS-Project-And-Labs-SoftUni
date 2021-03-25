import { CardActions } from "@material-ui/core";

export default (properties = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return properties;
        case 'CREATE':
            return properties;
        default:
            return properties;
    }
}