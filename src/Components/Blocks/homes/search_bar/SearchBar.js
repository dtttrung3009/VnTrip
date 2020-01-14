import React, {Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className={'symbol'}>
                    <div className="row symbol_child">
                        <div className="col-lg-2 pd">
                            <div className='fa fa-globe ml mr'/>
                            Khách sạn
                        </div>
                        <div className="col-lg-10 right">
                        </div>
                    </div>
                </div>
                <div className={'search_bar'}>
                    <div class="row">
                        <div class="col-lg-6 ml">
                            <div className="form-group">
                                <label>Địa điểm hoặc tên khách sạn</label><input
                                type="text"
                                className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-lg-2.5 ml">
                            <div className="form-group">
                                <label>Nhận phòng</label>
                                <input
                                    type="date"
                                    className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-lg-2.5 ml">
                            <div className="form-group">
                                <label>Trả phòng (1 đêm)</label>
                                <input
                                    type="date"
                                    className="form-control" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-lg-1.5 btn_search ml">
                            <button type="button" className="btn btn-warning">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;

