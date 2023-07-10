import { Carousel } from 'antd';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
 

const FireCarousel = () =>{

    const imgs = [
        "https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg",
        "https://amc-theatres-res.cloudinary.com/image/upload/v1555343844/amc-cdn/general/306b854d-de9d-4bae-8bb6-cbb7efa6e54f/Cap_US_web.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b2e8e27716715.56369991cee4f.jpg",
    ]
    const imgs1 = [
        "https://as2.ftcdn.net/v2/jpg/05/03/43/41/1000_F_503434105_2mPPrAaKP2jNuMsi4m2WtT6VsyuJG4A3.jpg",
        "https://visme.co/blog/wp-content/uploads/2021/06/how-to-make-a-poster-header-wide.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVSWCaGAWiUF0P3OPwKFomwBtcc77AGc35w&usqp=CAU",
        "https://i.easil.com/wp-content/uploads/20221226212804/COPY-How-to-Create-11-Stunning-Posters-without-a-Designer-custom.jpg"
    ]
    const [CarouselImgs] = useState(imgs);
    const [CarouselImgs1] = useState(imgs1);

   

        return (
            <div>

                <Row gutter={[8, 8]}>
                    <Col xs={{ span: 24  }} lg={{ span: 12  }}>
                    <Col flex="auto">                         
                        <Carousel autoplay dotPosition="right">                            
                            {CarouselImgs.map((url,i) => {
                              return  <React.Fragment key={i}>
                                    <img height="160px" width="100%" alt="this is carousel1 " src={url} />
                                </React.Fragment>                                
                            })}                            
                        </Carousel>
                    </Col>
                    </Col>
                    <Col xs={{ span: 24  }} lg={{ span: 12  }}>
                        <Carousel autoplay dotPosition="right">                            
                                {CarouselImgs1.map((url,i) => {
                                return  <React.Fragment key={i}>
                                        <img height="160px" width="100%" alt="this is carousel2 " src={url} />
                                    </React.Fragment>                                
                                })}                            
                        </Carousel>
                    </Col>
                    
                </Row>


            </div>
        )

}

export default FireCarousel;