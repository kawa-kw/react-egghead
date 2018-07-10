import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import Events from './components/Events';
import Filter from './components/Filter';
import AppHOC from './components/HOC';
import InputUpdate from './components/InputUpdate';
import Mounting from './components/Mounting';
import MountingLevelUp from './components/MountingLevelUp';
import NestedComponents from './components/NestedComponents';
import References from './components/References';
import SimpleValidation from './components/SimpleValidation';


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

        <h4>------------- From AppHOC ------------------------</h4>
        <AppHOC />

        <br />
        <br />

        <h4>------------- From Filter ------------------------</h4>
        <Filter />

        <br />
        <br />

        <h4>------------- From MountingLevelUp ------------------------</h4>
        <MountingLevelUp />

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
