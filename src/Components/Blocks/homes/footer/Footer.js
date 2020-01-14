import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className={'up'}>
                    <div className={'up1'}>
                        <div className='txt'>
                            <span>Khách sạn theo tỉnh thành</span>
                        </div>
                        <div className='hr'>
                            <hr/>
                        </div>
                    </div>
                    <div className={'up2'}>
                        <div class="row">
                            <div class="col-lg-2">
                                <p>Khách sạn An Giang</p>
                                <p>Khách sạn Bình Thuận</p>
                                <p>Khách sạn Hà Nội</p>
                                <p>Khách sạn Lai Châu</p>
                                <p>Khách sạn Ninh Thuận</p>
                                <p>Khách sạn Quảng Trị</p>
                                <p>Khách sạn Vĩnh Phúc</p>
                            </div>
                            <div className="col-lg-2">
                                <p>Khách sạn Bà Rịa - Vũng Tàu</p>
                                <p>Khách sạn Cần Thơ</p>
                                <p>Khách sạn Hà Tĩnh</p>
                                <p>Khách sạn Lâm Đồng</p>
                                <p>Khách sạn Phú Yên</p>
                                <p>Khách sạn Thái Nguyên</p>
                            </div>
                            <div className="col-lg-2">
                                <p>Khách sạn Bắc Giang</p>
                                <p>Khách sạn Đà Nẵng</p>
                                <p>Khách sạn Hải Phòng</p>
                                <p>Khách sạn Lạng Sơn</p>
                                <p>Khách sạn Quảng Bình</p>
                                <p>Khách sạn Thanh Hóa</p>
                            </div>
                            <div className="col-lg-2">
                                <p>Khách sạn Bến Tre</p>
                                <p>Khách sạn Đắk Lắk</p>
                                <p>Khách sạn Hòa Bình</p>
                                <p>Khách sạn Lào Cai</p>
                                <p>Khách sạn Quảng Nam</p>
                                <p>Khách sạn Thừa-Thiên-Huế</p>
                            </div>
                            <div className="col-lg-2">
                                <p>Khách sạn Bình Định</p>
                                <p>Khách sạn Điện Biên</p>
                                <p>Khách sạn Khánh Hòa</p>
                                <p>Khách sạn Nghệ An</p>
                                <p>Khách sạn Quảng Ngãi</p>
                                <p>Khách sạn Tiền Giang</p>
                            </div>
                            <div className="col-lg-2">
                                <p>Khách sạn Bình Dương</p>
                                <p>Khách sạn Đồng Nai</p>
                                <p>Khách sạn Kiên Giang</p>
                                <p>Khách sạn Ninh Bình</p>
                                <p>Khách sạn Quảng Ninh</p>
                                <p>Khách sạn TP. Hồ Chí Minh</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='up3'>
                        <div class="row">
                            <div class="col-lg-2">
                                <p>Về Vntrip</p>
                                <p>Liên hệ</p>
                                <p>Điều khoản sử dụng</p>
                                <p>Chính sách bảo mật</p>
                                <p>Hợp tác khách sạn</p>
                                <p>Blog du lịch</p>
                                <p>Tuyển dụng</p>
                                <p>Hoàn tiền thành viên</p>
                                <p>Hợp tác đại lý</p>
                            </div>
                            <div className="col-lg-2">
                                <img src={require('../../../../asserts/image/footer/appStore.png')}/>
                                <img src={require('../../../../asserts/image/footer/ggPlay.png')}/>
                            </div>
                            <div className="col-lg-4">
                                <p>Công ty TNHH VNTRIP OTA</p>
                                <p>Tầng 2 Tòa nhà 17T4 Hapulico Complex</p>
                                <p> Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</p>
                                <p> tài khoản: 0491000136688</p>
                                <p> Ngân hàng: Vietcombank</p>
                                <p>Chi nhánh Thăng Long</p>
                                <p> Ngày cấp ĐKKD: 9/5/2016</p>
                                <p>Email: cs@vntrip.vn</p>
                                <p>Hotline:0963 266 688</p>
                            </div>
                            <div className="col-lg-4">
                                <p>Du lịch thông minh! Đăng ký nhận tin để lên kế<br/>
                                    hoạch cho kỳ nghỉ tới ngay từ bây giờ:</p>
                                <div className='row'>
                                    <div className="col-lg-9 no">
                                        <input
                                            type="email"
                                            className="form-control" placeholder=""/>
                                    </div>
                                    <div className="col-lg-3 no">
                                        <button type="button" className="btn btn-outline-warning">Đăng ký</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'down'}>

                </div>
            </div>
        );
    }
}

export default Footer;
