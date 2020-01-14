import React, {Component} from 'react';
import './LocalFamous.css'

class LocalFamous extends Component {
    render() {
        return (
                <div className='local_famous'>
                    <h3>ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h3>
                    <hr style={{width:"10%",height:'2px'}}/>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={require('../../../../asserts/image/local_famous/1.png')}/>
                        </div>
                        <div className="col-lg-2 center">
                            <img src={require('../../../../asserts/image/local_famous/2.png')}/>
                        </div>
                        <div className="col-lg-2 center">
                            <img src={require('../../../../asserts/image/local_famous/3.png')}/>
                        </div>
                        <div className="col-lg-4">
                            <img src={require('../../../../asserts/image/local_famous/4.png')}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={require('../../../../asserts/image/local_famous/5.png')}/>
                        </div>
                        <div className="col-lg-4 center">
                            <img src={require('../../../../asserts/image/local_famous/6.png')}/>
                        </div>
                        <div className="col-lg-4">
                            <img src={require('../../../../asserts/image/local_famous/7.png')}/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default LocalFamous;
