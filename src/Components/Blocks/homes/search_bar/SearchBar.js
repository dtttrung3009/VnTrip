import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className='search_bar'>
                <div className={'in1 ml_20'}>
                    <div class="form-group">
                        <label>Địa điểm hoặc tên khách sạn</label>
                        <input
                            type="text"
                            class="form-control" placeholder=""/>
                    </div>
                </div>
                <div className={'in2 ml_20'}>
                    <div className="form-group">
                        <label>Nhận phòng</label>
                        <input
                            type="date"
                            className="form-control" placeholder=""/>
                    </div>
                </div>
                <div className={'in3 ml_20'}>
                    <div className="form-group">
                        <label>Trả phòng (1 đêm)</label>
                        <input
                            type="date"
                            className="form-control" placeholder=""/>
                    </div>
                </div>
                <div className={'btn_search ml_20'}>
                    <button type="button" className="btn btn-warning">Tìm kiếm</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
