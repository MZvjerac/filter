import { withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

const StyledTableCell = withStyles((theme) => ({
    head: {    
        backgroundColor: '#595590',
        color: theme.palette.common.white,
        fontSize: 15, 
        height: '38px'       
    },
    body: {
        fontSize: 15,
    },
}))(TableCell);

export default StyledTableCell;