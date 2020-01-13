import React, {Component, Fragment} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='parent'>
                <div className={'flex1'}>
                    <img src={require('../../../../asserts/image/vntrip.PNG')}/>
                </div>
                <div className={'flex2'}>
                    <nav class="nav nav-inline">
                        <a class="nav-link active" href="#">Khách sạn</a>
                        <a class="nav-link" href="#">Khách hàng doanh nghiệp</a>
                        <a className="nav-link" href="#">deal-combo</a>
                        <a className="nav-link" href="#">vntrip-luxury</a>
                    </nav>
                </div>
                <div className={'flex2 login'}>
                    <nav className="nav nav-inline">
                        <a className="nav-link" href="#">đăng nhập</a>
                        <a className="nav-link" href="#">đăng ký</a>
                    </nav>
                </div>
                <div>
                    <img src={require('../../../../asserts/image/hotline.PNG')}/>
                </div>
            </div>
        );
    }
}

export default Header;
