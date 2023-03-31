import { Box, TextField,Button } from "@mui/material";
import Navbar from "scenes/navbar";
import "./messenger.css" ;
import Conversation from "components/conversations/Conversation";
import Message from "components/message/Message";


const MessagePage = () => {
  return (
    <Box>
      <Navbar />
      <div className = "messenger"> 
        <div className = "chatMenu">
          <div className="chatMenuWrapper">
          
          <TextField label="Search for friends" fullWidth variant="outlined"  className="chatMenuInput"/>
              
                <Conversation/>
          </div>
        </div>
        <div className="chatBox">
              <div className = "chatBoxWrapper"> 
                <div className="chatBoxTop">
                  <Message/>
                  <Message own={true}/>
                  <Message/>
                </div>
                <div className="chatBoxBottom">

                <Box display="flex" alignItems="center" width="100%">
                <TextField label="Type your message here" fullWidth variant="outlined" />
                <Button variant="contained" color="primary" sx={{ ml: "1rem" }}>
                  Send
                </Button>
              </Box>
                </div>
              </div>
        </div>

      </div>




    </Box>
  );
};

export default MessagePage;