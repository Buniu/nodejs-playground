import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';

export const MyDrawer = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
    return (
        <React.Fragment>
            {/* Add a button or any other element to toggle the drawer */}
            <button onClick={toggleDrawer}>Toggle Drawer</button>
            <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem>
                        <Tooltip title={name}>
                            <ListItemIcon>
                                <div> X </div>
                            </ListItemIcon>
                        </Tooltip>
                        <ListItemText />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
};
