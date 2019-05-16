import React from 'react';
import {Link} from 'react-router-dom';
import './FavoList.css';

const FavoItem = () => {
    return (

        <div className="favo-item">
            {/* <div>???</div> */}
            <h2><a>타이틀</a></h2>
            <div className="favo-date">2019-05-16</div>
            <p>내용</p>
            
        </div>
    );
};

const FavoList = () => (
    <div className="favo-list">
        <FavoItem />
        <FavoItem />
        <FavoItem />
        <FavoItem />
        <FavoItem />
    </div>
)
export default FavoList;