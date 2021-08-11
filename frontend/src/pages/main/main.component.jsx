import React from "react";
import Counter from "../../components/counter/counter.component";
import UserHeading from "../../components/user-heading/user-heading.component";

import "./main.styles.scss";

const Main = () => (
    <div className="main-page">
        <UserHeading/>
        <Counter />
    </div>
);

export default Main;