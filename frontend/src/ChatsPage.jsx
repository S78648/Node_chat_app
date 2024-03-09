import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const Chatspage = (props)=>{
  const chatProps = useMultiChatLogic(
 'a64b796d-6777-4b8e-80bb-215786c9b9db',
  props.user.username,
  props.user.secret
  )
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:'100%'}} />
    </div>
  )
}

export default Chatspage;
