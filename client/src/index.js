import React from 'react';
import { render } from 'react-dom';

import App from './App';

function WrappedApp() {

    return (
        <App/>
    );
}

render(<WrappedApp/>, document.getElementById('root'));