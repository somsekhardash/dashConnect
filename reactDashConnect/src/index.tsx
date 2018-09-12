import * as React from 'react';
import * as ReactDOM from "react-dom";
import { StartPage } from "./components/StartPage/index";

const Index = () => {
    return <div className="parent">
        <StartPage />
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));