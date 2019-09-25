import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Item = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Mary Moreira
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
  </Typography>
);

export default Item;