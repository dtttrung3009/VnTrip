import React, {Component} from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
                <div className='about'>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={require('../../../../asserts/image/about/1.png')}/>
                            <h6>RẺ HƠN GIÁ RẺ NHẤT, NGẠI GÌ KHÔNG ĐẶT?</h6>
                            <p>Ở đâu giá rẻ hơn, Thông báo ngay với Vntrip.vn để được mua giá rẻ hơn rẻ nhất</p>
                        </div>
                        <div className="col-lg-4">
                            <img src={require('../../../../asserts/image/about/2.png')}/>
                            <h6>THANH TOÁN LINH HOẠT & AN TOÀN</h6>
                            Chấp nhận mọi hình thức thanh toán, không cần thẻ tín dụng. Bảo mật tuyệt đối thông tin cá nhân.
                        </div>
                        <div className="col-lg-4">
                            <img src={require('../../../../asserts/image/about/3.png')}/>
                            <h6>HỖ TRỢ 24/7</h6>
                            Gọi ngay 0963 266 688 kể cả 2h sáng để được hỗ trợ.
                        </div>
                    </div>
                </div>
        );
    }
}

export default About;
