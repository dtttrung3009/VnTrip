import React, {Component} from 'react';

class Slider extends Component {
    render() {
        return (
            <div>
                <div id="ss" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#ss" data-slide-to="0" class="active"></li>
                        <li data-target="#ss" data-slide-to="1"></li>
                        <li data-target="#ss" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src={require('../../../../asserts/image/slider/1.png')}/>
                        </div>
                        <div class="carousel-item">
                            <img src={require('../../../../asserts/image/slider/2.png')}/>
                        </div>
                        <div class="carousel-item">
                            <img src={require('../../../../asserts/image/slider/3.jpg')}/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#ss" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#ss" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Slider;
