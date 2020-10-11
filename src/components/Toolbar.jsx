import React from 'react';
import { Card, ToolbarButton, Toolbar, Icon, BackButton } from 'react-onsenui';

const ExpenseToolbar = () => (

    <Toolbar material>
        <div className="left">
        </div>
        <div className="center">
            Title
    </div>
        <div className="right">
            <ToolbarButton>
                <Icon icon="md-menu" />
            </ToolbarButton>
        </div>
    </Toolbar>
);


export default ExpenseToolbar;