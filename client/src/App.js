import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import MineralUIPage from './pages/mineralui';
import AtlasKitPage from './pages/atlaskit';
import BaseWebPage from './pages/baseweb';
import CarbonPage from './pages/carbon';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4500/graphql',
});

const client = new ApolloClient({
    cache: cache,
    link: link,

    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    }
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/mineralui" component={MineralUIPage} exact/>
                        <Route path="/atlaskit" component={AtlasKitPage} exact/>
                        <Route path="/baseweb" component={BaseWebPage} exact/>
                        <Route path="/carbon" component={CarbonPage} exact/>
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>

        );
    }
}


export default App;