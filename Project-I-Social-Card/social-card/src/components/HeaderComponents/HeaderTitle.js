import React from 'react';
import './Header.css';
import moment from 'moment';
const HeaderTitle = () => {
    return(
        <div className = "HeaderTitle">
        <h1>Lambda School</h1>
        <h2>@LambdaSchool · {moment().format("MMM Do")}</h2>
        </div>
    )
};

export default HeaderTitle;