import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {createStore} from "@reduxjs/toolkit";

import reducers from "./redux/reducers";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    , document.getElementById('root'));