import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import "./FireCard.css"
import FireBreadcrumb from "../BreadcrumbComp/FireBreadcrumb";
// import {  Spin } from 'antd';
// import  {  SyncOutlined, DribbbleOutlined } from '@ant-design/icons';
import { Col, Row , Spin } from 'antd';

const FullDetails = (props) => {
  
   const initialData  = {
        "addtionalImgs": "",
        "fullDesc": "",
        "imageRef": "",
        "isBookmarked": false,
        "isLiked": false,
        "owner": "",
        "ownerAvatar": "",
        "secureInfo": "",
        "securePW": "",
        "shortDesc": "",
        "title": "",
        "url": ""
    }
    const [noteId, setNoteId] = useState("0")
    const [parms  ] = useSearchParams();
    const [cardInfo, setCardInfo] = useState(initialData);
    const [loading, setLoading] = useState(true);

    // let { state } = useLocation();

    useEffect(() => {
        console.log(props);
        console.log(parms.get('id'));
    
        setNoteId( parms.get('id'));

        axios.get(`notes/${parms.get('id')}.json`).then(
            (response) => {
              console.log(response);
              setCardInfo(response);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
              

            } );


// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    

    return (
        <>
        
        <FireBreadcrumb navList={[{title:"Dashboard"},{title:"users"},{title :"some page"}]} />
        <br/>

        {loading === true ? 
    
        <>
        
        
        <Spin size="large" />
        
        </>
        :
        <>
          { noteId !== "0" ? 
    
        <>
            

            <Row gutter={[8, 8]}>
            <Col xs={{ span: 24  }} lg={{ span: 12  }}>


            <div className="card">
            <img className="image" src={cardInfo.imageRef} alt="React Logo"/>
            <div className="card-content">
            <div className="title">{cardInfo.title}</div>
            <div className="description">
            {cardInfo.fullDesc}
            </div>
            <div className="owner">
                <img className="owner-avatar" src={cardInfo.ownerAvatar} alt="Owner Avatar"/>
                Owner:  {cardInfo.owner}
            </div>
            {/* <div className="additional-images">
                <img className="additional-image" src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="Additional Image 1"/>
                <img className="additional-image" src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="Additional Image 2"/>
                <img className="additional-image" src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="Additional Image 3"/>
            </div> */}
            <div className="status">
                Short Description: {cardInfo.shortDesc}
            </div>
            <div className="like-bookmark-icons">
                <img className="icon" src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Liked Icon"/>
                Is Liked
                <img className="icon" src="https://cdn-icons-png.flaticon.com/128/102/102279.png" alt="Bookmark Icon"/>
                Is Bookmarked
            </div>
            <div className="secure-info">
                Secure Info: {cardInfo.secureInfo}
            </div>
            <div className="secure-pw">
                Secure PW: <input type="password" id="password" />
                <button onclick="showSecureData()">Submit</button>
            </div>
            <a className="learn-more" href={cardInfo.url}  rel="noopener noreferrer" target="_blank">Learn More</a>
            </div>
                </div>



            </Col>
            <Col xs={{ span: 24  }} lg={{ span: 12  }}>   


            <h3> Comments session </h3>

            <div class="comments-container">
                <div class="comment">
                <span class="user">Jaya krishna &nbsp;</span>
                <span class="timestamp">1 hour ago</span>
                <div class="content">
                    This is the first comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                </div>
                <div class="comment">
                <span class="user">Saran  &nbsp;</span>
                <span class="timestamp">2 hours ago</span>
                <div class="content">
                    Second comment here. Pellentesque ac facilisis ex, in congue velit.
                </div>
                </div>
                <div class="comment-form">
                <textarea id="newComment" placeholder="Write a comment..."></textarea>
                <button onclick="addComment()">Post Comment</button>
                </div>
            </div>




            </Col>
            </Row>


        </>
            :  <h1> Error loading  details : noteid = {noteId} </h1>


        }</>
    }
        
        </>
        
    )

}

export default FullDetails;