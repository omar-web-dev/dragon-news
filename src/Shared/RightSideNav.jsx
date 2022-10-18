import React from 'react';
import { Button } from 'react-bootstrap';

const RightSideNav = () => {
    return (
        <div className="d-grid gap-2">
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-dark">Dark</Button>
        </div>
    );
};

export default RightSideNav;