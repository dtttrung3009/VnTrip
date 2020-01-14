import React, {Component} from 'react';
import './InternationalFamous.css'

class InternationalFamous extends Component {
    render() {
        return (
            <div className='international_famous'>
                <h3>ĐIỂM ĐẾN QUỐC TẾ PHỔ BIẾN</h3>
                <hr style={{width: "10%", height: '2px'}}/>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 nopm ">
                            <img src={require('../../../../asserts/image/international_famous/1.png')}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 nopm">
                                <img src={require('../../../../asserts/image/international_famous/2.png')}/>
                            </div>
                            <div className="col-lg-6 nopm">
                                <img src={require('../../../../asserts/image/international_famous/3.png')}/>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 nopm">
                        <img src={require('../../../../asserts/image/international_famous/4.png')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default InternationalFamous;
