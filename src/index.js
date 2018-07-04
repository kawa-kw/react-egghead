import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Events from './Events';
import InputUpdate from './InputUpdate';
import Mounting from './Mounting';
import NestedComponents from './NestedComponents';
import References from './References';
import SimpleValidation from './SimpleValidation';


// class AppWrapper extends React.Component {
//     render() {
//         return(
//             <div>
//                 <InputUpdate />
//                 <App />
//             </div>
//         )
//     }
// }


// The same as stateless component
const AppWrapper = () =>
    <div>
        <h4>------------- From App ------------------------</h4>
        <App />

        <br />
        <br />

        <h4>------------- From Mounting ------------------------</h4>
        <Mounting />

        <br />
        <br />

        <h4>------------- From References ------------------------</h4>
        <References />

        <br />
        <br />

        <h4>------------- From Events ------------------------</h4>
        <Events />

        <br />
        <br />
        <h4>------------- From SimpleValidation ------------------------</h4>
        <SimpleValidation />

        <br />
        <br />
        <h4>------------- From NestedComponents ------------------------</h4>
        <NestedComponents />

        <br />
        <br />
        <h4>------------- From InputUpdate ----------------</h4>
        <InputUpdate />
    </div>


ReactDOM.render(
    <AppWrapper />,
    document.getElementById('root')
);
