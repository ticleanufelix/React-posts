import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import Stack from '@mui/material/Stack';

export default function NavBar() {
  const { isSignedIn, user } = useUser();
//   console.log(isSignedIn, user); Nu lasati console log-uri in commit !!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Posts
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            {user && <Typography>Hello, {user.username}</Typography>}
            {isSignedIn ? <SignOutButton /> : <SignInButton />}
            </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
