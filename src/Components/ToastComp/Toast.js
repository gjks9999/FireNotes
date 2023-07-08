import {  notification  } from 'antd';
import React, { forwardRef } from 'react';



const Toast = forwardRef((props, ref) =>{


  React.useImperativeHandle(ref, () => ({
    showSuccessToast,
    showInfoToast
  }));

   const showSuccessToast = () => {
      notification.success({
        message: props.title,
        description: props.children, 
        onClick: () => {
          notification.destroy();
        },
    });

    return "done"

   }
   const showInfoToast = () => {
      notification.info({
        message: props.title,
        description: props.children, 
        onClick: () => {
          notification.destroy();
        },
    });
    return "done"
        // notification.error({
        //   message: 'Notification Title',
        //   description:
        //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        //   onClick: () => {
        //     console.log('Notification Clicked!');
        //   },
        // });
        // notification.warning({
        //   message: 'Notification Title',
        //   description:
        //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        //   onClick: () => {
        //     console.log('Notification Clicked!');
        //   },
        // });
        // notification.info({
        //   message: 'Notification Title',
        //   description:
        //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        //   onClick: () => {
        //     console.log('Notification Clicked!');
        //   },
        // });


      };

  
        return (
            <> 

            
              </>
        )


})

export default Toast;