import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavigationProps {}

const Navigation: React.SFC<NavigationProps> = () => {
    return (
        <div>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
        </div>
    );
};

export default Navigation;
