import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import Movies from './pages/movies';
import Layout from './components/layout';
import Series from './pages/series';
export interface RoutesProps {}

const WrappedComponent = (Component: React.ComponentClass, props: RouteComponentProps<any>) => {
    return (
        <Layout>
            <Component {...props} />
        </Layout>
    );
};

const Routes: React.SFC<RoutesProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/movies" />
                <Route path="/movies" render={(props): any => WrappedComponent(Movies, props)} />
                <Route path="/series" render={(props): any => WrappedComponent(Series, props)} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
