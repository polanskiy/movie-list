import * as React from 'react';
import Navigation from './navigation';

export interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <header className="header">
                header <Navigation />
            </header>
            <div className="content">{children}</div>
        </React.Fragment>
    );
};

export default Layout;
