import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
// import "slick-caroisel/slick/slick-theme.css";
import specialtyImg from "../../../assets/specialty/co-xuong-khop.jpg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
        </div>

    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >
        </div>
    );
}

class Specialty extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Chuyên khoa phổ biển</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp </div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Thần kinh</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Tiêu hóa</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Tim mạch</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Tai mũi họng</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Răng hàm mặt</div>
                            </div>
                        </Slider>
                    </div>
                </div >
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Bệnh viện Hữu nghị Việt Đức </div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Bệnh viện Chợ Rẫy</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Bệnh viện Đại học Y Dược 1</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Bệnh viện K</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Bệnh viện Ung Bướu</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Phòng khám đa khoa Sài Gòn</div>
                            </div>
                        </Slider>
                    </div>
                </div >
            </div >
        );
    }

}


export default (Specialty);
