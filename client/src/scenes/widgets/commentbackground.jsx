import { Box, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

const ChatWidget = () => {
  const classes = useStyles();

  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box className={classes.root}>
        <Avatar
          alt="User Avatar"
          src="https://picsum.photos/200"
          className={classes.avatar}
        />
        <Box className={classes.content}>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod hendrerit semper.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Avatar
          alt="User Avatar"
          src="https://picsum.photos/200"
          className={classes.avatar}
        />
        <Box className={classes.content}>
          <Typography variant="h6">Jane Smith</Typography>
          <Typography variant="body1">
            Nullam non mauris vel metus gravida iaculis. Morbi sodales magna
            a leo eleifend consequat.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.root}>
        <Avatar
          alt="User Avatar"
          src="https://picsum.photos/200"
          className={classes.avatar}
        />
        <Box className={classes.content}>
          <Typography variant="h6">Bob Johnson</Typography>
          <Typography variant="body1">
            Suspendisse blandit lacinia tellus, vel molestie nisi ultrices sit
            amet.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatWidget;