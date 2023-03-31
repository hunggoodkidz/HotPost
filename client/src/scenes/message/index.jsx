import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import ChatWidget from "scenes/widgets/ChatWidget";

const MessagePage = () => {
  return (
    <Box>
      <Navbar />
        <Box>

        
        <ChatWidget />
      </Box>
    </Box>
  );
};

export default MessagePage;