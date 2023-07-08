import { UserOutlined } from '@ant-design/icons';
import { Button, Input , Form, message, Badge, Alert} from 'antd';
import { useEffect, useState } from 'react';
import FireCardForNotification from '../FireCardComp/FireCardForNotification';
import axios from 'axios';
const { Search,TextArea  } = Input;


const  AddCard = (props) =>{


    const [title, settitle] = useState("");
    const [owner, setOwner] = useState("");
    const [imageRef, setimageRef] = useState("https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg");
    const [addtionalImgs, setAddtionalImgs] = useState("");
    const [url, setUrl] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [fullDesc, setFullDesc] = useState("");
    const [category, setCategory] = useState("");
    const [ secureInfo, setSecureInfo] = useState("");
    const [ securePW, setSecurePW] = useState("");
    const [ ownerAvatar] = useState("https://cdn-icons-png.flaticon.com/512/219/219986.png");


    const [addNewCard, setAddCardFlag] = useState(true);
    


    useEffect(() => {
      // alert("onMount")
    },[])

    const addNote=()=>{
        console.log(
            title, owner,  imageRef, addtionalImgs, url, shortDesc,
            fullDesc, category, secureInfo, securePW
        );


        const sendObject = {
            "title" : title,
            "owner" : owner,
            "imageRef" : imageRef,
            "addtionalImgs" : addtionalImgs,
            "url" : url,
            "shortDesc" : shortDesc,
            "fullDesc" : fullDesc,
            "secureInfo" : secureInfo,
            "securePW" : securePW,
            "ownerAvatar" : ownerAvatar,
            "isLiked" : false,
            "isBookmarked" : false
        }

        axios.post("/notes.json", sendObject)
          .then( (res)=> {
            console.log(res);
            message.success('Submit success!');
            setAddCardFlag(false)
          })
          .catch((err)=> {
            console.log(err);
            message.error('Submit failed!');
          });
        
    }

   const inputChanged = (e, type) =>{

        
        if(type === "title"){
            settitle(e.target.value)
        }     
        if(type === "owner"){
            setOwner(e.target.value)
        }     
        if(type === "imageRef"){
            setimageRef(e.target.value)
        }
        if(type === "addtionalImgs"){
            setAddtionalImgs(e.target.value)
        }
        if(type === "url"){
            setUrl(e.target.value)
        }
        if(type === "shortDesc"){
            setShortDesc(e.target.value)
        }
        if(type === "fullDesc"){
            setFullDesc(e.target.value)
        }
        if(type === "category"){
            setCategory(e.target.value)
        }
        if(type === "secureInfo"){
            setSecureInfo(e.target.value)
        }
        if(type === "securePW"){
            setSecurePW(e.target.value)
        }


    }



        return(
            <div>
                {addNewCard ? 
                
            
                <div>
                <h1> Add new fire card </h1>

                <div style={{display : 'grid', gridTemplateColumns : "60vw 40vw"}}>
                   
                <div>

                        <Form name="basic" labelCol={{  span: 8, }}
                        wrapperCol={{ span: 16, }}
                        style={{  maxWidth: "70vw", margin: "30px" }}
                        initialValues={{ remember: true,  }}
                        onFinish={addNote}
                    
                        autoComplete="off" >
                        
                        
                        <Form.Item
                        label="Title"
                        name="title"
                        rules={[
                            {
                            required: true,
                            message: 'Please input note title',
                            },
                        ]} >
                        
                        <Input allowClear  placeholder="Note title" value={title} 
                            onChange={(event)=>{ inputChanged(event, "title") } }/>

                        </Form.Item>



                        <Form.Item
                        label="Owner of note"
                        name="owner"
                        rules={[
                            {
                            required: true,
                            message: 'Please input owner name',
                            },
                        ]} >
                        
                        <Input allowClear  size="large"  placeholder="Owner name" value={owner} 
                        prefix={<UserOutlined />} onChange={(event)=>{ inputChanged(event, "owner") } } />

                        </Form.Item>


                        <Form.Item
                        label="Primary image url of note"
                        name="Primary image url of note"
                        rules={[
                            {
                            required: true,
                            message: 'Please input primary image url',
                            },
                        ]} >
                        
                        <Search  placeholder="image url" allowClear  enterButton="Search image"  size="large" value={imageRef} 
                        onChange={(event)=>{ inputChanged(event, "imageRef") } }/>

                        </Form.Item>

                        <Form.Item
                        label="Additional image url of note "
                        name="Additional image url of note"
                        rules={[
                            {
                            required: false,
                            message: 'Please input your additional image url !',
                            },
                        ]} >

                        <TextArea showCount maxLength={1000} style={{ height: 120, marginBottom: 24 }} 
                            placeholder="semicolon ';' seperated" value={addtionalImgs}onChange={(event)=>{ inputChanged(event, "addtionalImgs") } }/>
                        

                        </Form.Item>


                        <Form.Item
                        label="Reference URL"
                        name="Reference URL"
                        rules={[
                            {
                            required: true,
                            message: 'Please input reference URL',
                            },
                        ]} >
                        
                        <Search  placeholder="reference url" allowClear  enterButton="Search image"  size="large" value={url} 
                        onChange={(event)=>{ inputChanged(event, "url") } }/>

                        </Form.Item>

                        <Form.Item
                        label="Short desc"
                        name="Short desc"
                        rules={[
                            {
                            required: true,
                            message: 'Please input short desc',
                            },
                        ]} >
                        
                        <TextArea showCount maxLength={100} style={{ height: 120, marginBottom: 24 }} 
                            placeholder="Short desc" value={shortDesc}onChange={(event)=>{ inputChanged(event, "shortDesc") } }/>

                        </Form.Item>


                        <Form.Item
                        label="Full desc"
                        name="Full desc"
                        rules={[
                            {
                            required: true,
                            message: 'Please input full desc',
                            },
                        ]} >
                        
                        <TextArea showCount maxLength={10000} style={{ height: 120, marginBottom: 24 }} 
                            placeholder="Short desc" value={fullDesc}onChange={(event)=>{ inputChanged(event, "fullDesc") } }/>

                        </Form.Item>


                        <Form.Item
                        label="Category"
                        name="Category"
                        rules={[
                            {
                            required: true,
                            message: 'Please input Category',
                            },
                        ]} >
                        
                        <TextArea showCount maxLength={100} style={{ height: 120, marginBottom: 24 }} 
                            placeholder="Short desc" value={category}onChange={(event)=>{ inputChanged(event, "category") } }/>

                        </Form.Item>

                        {/* secureInfo */}

                        <Form.Item
                        label="Secure info"
                        name="Secure info"
                        rules={[
                            {
                            required: false,
                            message: 'Please input Secure info',
                            },
                        ]} >
                        
                        <TextArea showCount maxLength={10000} style={{ height: 120, marginBottom: 24 }} 
                            placeholder="Short desc" value={secureInfo}onChange={(event)=>{ inputChanged(event, "secureInfo") } }/>

                        </Form.Item>
                        
                        <Form.Item
                        label="Secure password"
                        name="Secure password"
                        rules={[
                            {
                            required: false,
                            message: 'Please input secure password',
                            },
                        ]} >
                        
                        <Input.Password value={securePW} onChange={(event)=>{ inputChanged(event, "securePW") } } />

                        </Form.Item>



                        <Form.Item  wrapperCol={{ offset: 8,  span: 16, }} >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                    </Form>
            </div>
                <div style={{  display : "flex", justifyContent : "center"}}>
                    
                <Badge.Ribbon text="Read only Card Preview">
                
                <FireCardForNotification  cardData={{
                            imageRef : imageRef ,
                            ownerAvatar : ownerAvatar,
                            isLiked : true,
                            title : title || "Card title",
                            shortDesc : shortDesc || "Some short desc"
                        }}     />

                </Badge.Ribbon>


                        
                    <br/>
            
                {

                }



                </div>

                </div>
                </div>

            : 
            
            <div style={{display : "flex", justifyContent : "center", marginTop : "100px"}}> 

            <Alert
                message="Success"
                description="Card added successfully"
                type="success"
                showIcon
            />
            </div>
            
             }
                


            </div> )
        
}

export default AddCard;