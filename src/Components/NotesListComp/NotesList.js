import {  useState } from "react";
import "./NotesList.css"
import FireCard from "../FireCardComp/FireCard";
import { Col, Row,  Badge,Tooltip, Avatar  } from 'antd';
import { UpCircleFilled, DownCircleFilled, UserOutlined } from '@ant-design/icons';
import WithLoader from "../HOC/WithLoader";

const FireCardWithLoader = WithLoader(FireCard)

const  NotesList = (props) =>{

    const [showNotes, setShowNotes] = useState(true)    

   const toggleNotes = () =>{
        setShowNotes(!showNotes)
    }

   const  cardLike = ( id, status) =>{
        props.userLiked( props.NotesTitle , id , status);
    }

        return(
        <div>

                <Row justify="end" align="middle" > 
                                            
                    <p className="notesTitle" > {props.NotesTitle}  </p>   &nbsp;&nbsp;
                

                    {showNotes ? 
                    <Col span={2} >
                        <Badge count={props.Notes.length}>
                            <DownCircleFilled style={{ fontSize: '25px' }} onClick={toggleNotes} />
                        </Badge>
                    </Col>
                    :
                    <Col span={2}>
                        <Badge count={props.Notes.length}>
                            <UpCircleFilled style={{ fontSize: '25px' }} onClick={toggleNotes} />
                        </Badge>
                    </Col>
                    }
                    {/* <Col span={2}>
                    </Col> */}

                    <Avatar.Group
                        maxCount={4}
                        maxPopoverTrigger="click"
                        size="large"
                        maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
                        >
                        <Tooltip title="User1" placement="top">
                        <Avatar style={{ backgroundColor: '#f56a00' }}>JK</Avatar> 
                        </Tooltip>                       
                        <Tooltip title="User 2" placement="top">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  
                            style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSO4E8MjJxn1wB3ERfrfTVQu7SIvn0T5LaQ&usqp=CAU"  
                            style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Tooltip title="User4" placement="top">
                        <Avatar style={{ backgroundColor: '#f56a00' }}>J</Avatar> 
                        </Tooltip>
                        <Tooltip title="User 2" placement="top">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  
                            style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSO4E8MjJxn1wB3ERfrfTVQu7SIvn0T5LaQ&usqp=CAU"  
                            style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        
                         
                    </Avatar.Group>

                    <Col span={2}>
                    </Col>

                </Row>

                {showNotes &&
                <Row justify="space-evenly"  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    props.Notes.map((note) => {
                    return   <Col className="gutter-row" key={note.id}>                    
                        <FireCardWithLoader                         
                        cardData={note}                        
                        type={props.NotesTitle}
                        cardLike={ ()=>{ cardLike( note.id, !note.isLiked) } }
                        />
                    </Col>
                    })
                }                    
                </Row>
                }
                

        </div>)

}

export default NotesList;