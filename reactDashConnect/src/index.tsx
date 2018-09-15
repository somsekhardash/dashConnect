import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SetupPage } from "./components/SetupPage/index";
const Index = () => {
    return <div className="parent">
        <SetupPage />
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));