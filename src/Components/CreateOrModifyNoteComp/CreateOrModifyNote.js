import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
const { Search,TextArea  } = Input;


const  CreateOrModifyNote = (props) =>{


    const [owner, setOwner] = useState("")
    const [delOwner, setdelOwner] = useState("")
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [desc, setdesc] = useState("")


    const addOrUpdateNote=(e)=>{
        e.preventDefault();        
        console.log(
            owner, delOwner,title, image, desc


        );
        
    }

   const inputChanged = (e, type) =>{

        if(type === "owner"){
            setOwner(e.target.value)
        }
        if(type === "delOwner"){
            setdelOwner(e.target.value)
        }
        if(type === "title"){
            settitle(e.target.value)
        }
        if(type === "image"){
            setimage(e.target.value)
        }
        if(type === "desc"){
            setdesc(e.target.value)
        }



    }



        return(
            <div>
                <form  onSubmit={addOrUpdateNote} >

                    <Input allowClear  size="large"  placeholder="Owner first name" value={owner} 
                    status={owner.length > 0 ? "none" : "error"}
                    prefix={<UserOutlined />} onChange={(event)=>{ inputChanged(event, "owner") } } />

                    <Input allowClear  size="large"  status={delOwner.length > 0 ? "none" : "error"} 
                    placeholder="Owner second name" value={delOwner}  prefix={<UserOutlined />} onChange={(event)=>{ inputChanged(event, "delOwner") } } />

                    <Input allowClear  placeholder="Note title" value={title} 
                    status={title.length > 0 ? "none" : "error"} onChange={(event)=>{ inputChanged(event, "title") } }/>

                    <Search  placeholder="input search text" allowClear  enterButton="Search"  size="large" value={image} onChange={(event)=>{ inputChanged(event, "image") } }/>

                    <TextArea showCount maxLength={100} style={{ height: 120, marginBottom: 24 }} 
                        placeholder="can resize" value={desc}onChange={(event)=>{ inputChanged(event, "desc") } }/>

                    <button type="submit">Add </button>

                </form>

            </div>
        )
        
}

export default CreateOrModifyNote;