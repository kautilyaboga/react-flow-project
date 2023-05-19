import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonMUI from "../../components/ButtonMUI";
import Button from "@mui/material/Button";

export default function NavBar({ nodes, edges, setNotificationData, setNotificationOpen }) {

  function onSaveChangesSubmit() {
    console.log(edges);
    console.log(nodes);
    console.log(nodes?.length);

    let isValid = true;

    //  Error Handling
    if (nodes?.length > 1) {
      const edgeTargets = edges?.map((edge)=>{
        return edge?.target
      })
      // Get only unique edges 
      const uniqueEdgeTargetsLength = [... new Set([...edgeTargets])]?.length;
      // Checking if more than one Nodes have empty target handles
      if ( nodes?.length - uniqueEdgeTargetsLength >= 2 ) {
        isValid = false;
      }
    }

    //  If not valid showing a notification error and returning
    if (!isValid) {
      setNotificationData({
        severity : "error",
        message : 'Cannot Save Flow. More than one nodes have empty target handles',
      })
      setNotificationOpen(true)
      return
    }

    setNotificationData({
      severity : "success",
      message : 'Saved Flow',
    })
    setNotificationOpen(true)
    return isValid
  }

  return (
    <AppBar
      position="fixed"
      // Usefull if we want nav bar not coming onto side nav
      // sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#2E4F4F" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap component="div">
          Chatbot Flow Builder
        </Typography>

        <ButtonMUI
          onClick={onSaveChangesSubmit}
          name = "Save Changes"
        />

      </Toolbar>
    </AppBar>
  );
}
