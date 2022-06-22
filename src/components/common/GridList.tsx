import React from 'react';
import Grid from '@mui/material/Grid';

const GridList: React.FC<{ children: React.ReactElement[], colWidth: number }> = ({ children, colWidth }) => {
    return (
        <Grid container spacing={2} padding={2}>
            {(children || []).map((listItem) => {
                return (
                    <Grid item xs={colWidth} key={listItem.key}>
                        {listItem}
                    </Grid>
                )
            })}

        </Grid>
    )
}

export default GridList