import { Carousel } from 'antd';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
 

const FireCarousel = () =>{

    const imgs = [
        "https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b2e8e27716715.56369991cee4f.jpg"
    ]
    const imgs1 = [
        "https://images.hindustantimes.com/img/2022/04/01/550x309/RRR-Movie-Review_1648825470847_1648825479894.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b2e8e27716715.56369991cee4f.jpg"
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