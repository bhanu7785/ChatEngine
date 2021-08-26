const OthersMessage =({lastMessage,message})=>{

    const isFirstMessageByUSer=!lastMessage || lastMessage.sender.username !== message.sender.username;


    return (
        <div className="message-row">
           {isFirstMessageByUSer && (
               <div className="message-avtar"
               style={{backgroundImage:`url(${message?.sender?.avatar})`}}
               />
           )}
           {
        (message?.attachments?.length>0)
          ? (
               <img 
               src={message.attachments[0].file}
               alt="message-attachment"
               className="message-image"
               style={{marginLeft:isFirstMessageByUSer?'4px':'48px'}}
               />
          ): <div className="message" style={{float:'left',marginLeft:isFirstMessageByUSer?'4px':'48px',backgroundColor:'#CABCDC' }}> 
          {message.text}
       </div>
            }
        </div>
    )

}

export default OthersMessage;