import React, {Component} from 'react';
import './Topbar.css';

class Topbar extends Component {
    render() {
        return (
            <div className="dropdown">
                <a className="dropbtn">VNĐ
                <span className={'fa fa-angle-down'}></span></a>
                <div className="dropdown-content">
                    <div className={'triangle'}></div>
                    <div className={'dropdown_a'}>
                        <p>Currency</p>
                        <a href="#">CSS và CSS3</a>
                        <a href="#">HTML</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Topbar;

