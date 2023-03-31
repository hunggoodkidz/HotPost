import { Box, TextField, Button } from "@mui/material";

const ChatWidget = () => {
  return (
    <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        flexDirection="column"
        alignItems="center"
    >
      <Box
        width="100%"
        minHeight="400px"
        bgcolor="#fff"
        p="1rem"
        borderRadius="8px"
        mb="1rem"
        overflow="auto"
      >
        {/* Chat messages go here */}

        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap="0.5rem"
          >
            <Box
              bgcolor="#e1ffc7"
              color="#333"
              padding="0.5rem 1rem"
              borderRadius="1rem"
              maxWidth="70%"
              textAlign="left"
            >
              Hi there! How are you doing today?
            </Box>
            <Box
              bgcolor="#e1ffc7"
              color="#333"
              padding="0.5rem 1rem"
              borderRadius="1rem"
              maxWidth="50%"
              textAlign="left"
            >
              I'm doing well, thank you for asking!
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="0.5rem"
          >
            <Box
              bgcolor="#d9d9d9"
              color="#333"
              padding="0.5rem 1rem"
              borderRadius="1rem"
              maxWidth="60%"
              textAlign="left"
            >
              What have you been up to lately?
            </Box>
            <Box
              bgcolor="#d9d9d9"
              color="#333"
              padding="0.5rem 1rem"
              borderRadius="1rem"
              maxWidth="80%"
              textAlign="left"
            >
              Not much, just working and hanging out with friends. How about you?
            </Box>
          </Box>
      </Box>
      <Box display="flex" alignItems="center" width="100%">
        <TextField label="Type your message here" fullWidth variant="outlined" />
        <Button variant="contained" color="primary" sx={{ ml: "1rem" }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWidget;
