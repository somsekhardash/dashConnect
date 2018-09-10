import React from "react";
import ReactDOM from "react-dom";

import style from "./css/index.scss";
import PageTitle from "./components/pageTitle/index";

const Index = () => {
    return <div className={style.parent}>
        <p className={style.name}>SOM</p>
        <PageTitle />
    </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));