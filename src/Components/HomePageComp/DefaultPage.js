import React, { useEffect, useRef, useState } from "react";
import NotesList from "../NotesListComp/NotesList";
import FireCarousel from "../CarouselComp/FireCarousel"
import Toast from "../ToastComp/Toast";
import FireCardForNotification from "../FireCardComp/FireCardForNotification";
// import axios from '../../AppDefaults';
import axios from 'axios';
import FireBreadcrumb from "../BreadcrumbComp/FireBreadcrumb";
import { Pagination } from 'antd';

const DefaultPage = (props) =>{

    const toastRef = useRef(null);

    const [allNotes, setNotes] = useState([]);
    const [notesDataLoaded , setnotesDataLoaded] = useState(false);
    const abortController = new AbortController();
    const [perPage] = useState(5);
    // const [singlePageNotes, setSinglePageNotes] = useState([])

    useEffect(  () => {
      
        // alert("mount");
        let isMounted = true;

        const getDataFromFireBase = async () =>{

            await axios.get(`/notes.json`)
            .then(res =>{
                
                console.log(res);
                let notesData = [];
                
                Object.keys(res).forEach((key) => {
                    const value = res[key];
                    console.log(`Key: ${key}, Value: ${value}`);
                    notesData.push({...value, id : key});
                });
                
                let notes = {
                    type : "persional notes",
                    notes : notesData
                }
                if (isMounted) {
                    let totalNotes = allNotes;
                    totalNotes.push(notes)
                    setNotes(totalNotes);
                    setnotesDataLoaded(true);
                }
            });
        }

        getDataFromFireBase();

        return () => {
            // alert("cancelled ");
            isMounted = false;
            abortController.abort();
          }

    },[]);



    
    const defaultNotificationState = 
    {headImage : "", 
    userAvatarImg : "",
    id:0 , isLiked : true }

    const [notificationObj , serNotificationObj] = useState(defaultNotificationState)


    // useEffect(() => {
    //     console.log(message)
    //     if(message === "Liked successfully"){
    //         toastRef.current.showSuccessToast(); 
    //     }else if(message === "Unliked successfully"){
    //         toastRef.current.showInfoToast();
    //     }
        
    //   }, [message]);


    useEffect(() => {
        console.log(notificationObj)
        
        if(notificationObj.headImage !== "")
        {            
            if(notificationObj.message === "Liked successfully"){
               let res =  toastRef.current.showSuccessToast(); 
               console.log(res)
            }else if(notificationObj.message  === "Unliked successfully"){
                let res =    toastRef.current.showInfoToast();
                console.log(res)
            }
        }

                
      }, [notificationObj]);


   const userLiked = (likedType, likedCardId, status) =>{


        
        let notes = [...allNotes];

        allNotes.forEach((notesList, i) => {
         if( notesList.type === likedType){

            notesList.notes.forEach((list, index) => {
              if(list.id === likedCardId){

                console.log(notes[i]["notes"][index]["isLiked"]) 
                notes[i]["notes"][index]["isLiked"] = status;
                let msg = "";
                if(status === true){
                    msg = "Liked successfully"
                }else{
                    msg = "Unliked successfully";
                }
                serNotificationObj({...notes[i]["notes"][index], "message"  : msg });
              }
            })

           

           
         }
        });

        setNotes(notes) ;
        
        

    }

     const onChange = (page, pageSize) => {
       
        console.log(page, pageSize);

        // const startIndex = perPage * perPage;
        // const endIndex = startIndex + perPage;
        // changePage(startIndex, endIndex);
        
     }

    //  const changePage=(startIndex, endIndex)=>{

    //     const singlePageNotes = allNotes.slice(startIndex, endIndex);

    //     setSinglePageNotes(singlePageNotes);
    //  }

    useEffect(() => {
            // if(allNotes.length > 0)
            //   {
            //     changePage(0,5);
            // }
      }, [allNotes]);


        return(
            <>

            <FireBreadcrumb navList={[{title:"Dashboard"},{title:"users"},{title :"some page"}]} />
                    <br/>
                    <br/>
            
            <FireCarousel />
   
            <Toast title={notificationObj.message} ref={toastRef}  >            
                <div style={{ marginLeft : "-40px" }} > 
                    <FireCardForNotification
                        cardData={notificationObj}                                                
                    />
                </div> 
            </Toast>

            {notesDataLoaded && 
           <>
                { allNotes.map((notesList, index) => {
                    return (<NotesList key={index}  NotesTitle={notesList.type} Notes={notesList.notes} userLiked={userLiked} />)
                }) }

            {/* <Pagination defaultCurrent={1} onChange={onChange}  total={50} /> */}

            {/* <Pagination
            total={50}
            showSizeChanger     
            pageSize={perPage}       
            onChange={onChange} 
            showTotal={(total) => `Total ${total} items`}
        /> */}

            </>
            }
            
            
            </>
        )

}

export default DefaultPage;