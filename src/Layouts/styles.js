import { borderRadius, color, height, padding } from "@mui/system";

export const styles = () => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    color: "#000133",
  },
  appBar: {
    background: "#fff",
    color: "#012241",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px;",
  },
  icon: {
    padding: "10px",
  },
  title: {
    margin: "auto",
  },
  userName: {
    marginRight: "10px",
    marginLeft: "100px",
  },
  profilePic: {
    marginRight: "90px",
  },
  container: {
    display: "flex",
    flex: 1,
    background: "red",
    marginTop: "50px",
  },
  drawer: {
    background: "#012241",
    padding: "30px 0px 0px 0px",
    position: "static",
    transition: "width .5s",
  },
  ClientDrawer: {
    background: "#012241",
    position: "static",
    transition: "width .5s",
  },
  closed: {
    width: "60px",
  },
  clientOpened: {
    width: "350px",
  },
  opened: {
    width: "240px",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
  footer: {
    background: "#FFF",
    height: "50px",
    color: "#012241",
  },
  sideBar: {
    color: "#FFF",
  },
  sideBarIcon: {
    color: "#FFF",
  },
  sideBarItem: {
    color: "#FFF",
  },
  sideBarLink: {
    textDecoration: "none",
    color: "#FFF",
    fontSize: "16px",
  },
  clientSideBar: {
    padding: "0px 0px 0px 60px",
  },
  listItem: {
    color: "#fff",
  },
  toggleButton: {
    color: "#FFF",
    padding: "10px",
  },
  formFields: {
    display: "flex",
    padding: "0 0 0 20px",
  },
  title: {
    color: "#000",
    marginLeft: "300px",
  },
  routeInput: {
    border: "none",
    padding: "5px",
    marginTop: "20px",
    height: "30px",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
    boxShadow: "0px 7px 29px 0px #000",
  },
  startButton: {
    border: "none",
    display: "block",
    width: "80px",
    background: "#fff",
    color: "#000",
    cursor: "pointer",
    height: "30px",
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
    boxShadow: "0px 7px 29px 0px #000",
  },
  realTimeResults: {
    background: "#fff",
    width: "260px",
    height: "30vh",
    marginTop: "30px",
    marginLeft: "20px",
    borderRadius: "5px",
    boxShadow: "0px 7px 29px 0px #000",
  },
  logout: {
    width: "100px",
    border: "1px solid #3e3e3e",
    outline: "none",
    padding: "5px",
    borderRadius: "3px",
    background: "#012241",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  count:{
    background:"#3e3e3e",
    border: "1px solid #fff",
    borderRadius:"50%",
    width:"15px",
    height:"15px",
    position:"relative",
    color:"#fff",
    padding:"5px",
    fontSize:"13px",
    fontWeight:700,
    top:-6,
    left:-16
  },
  close:{
    color:"#012241",
    cursor:"pointer",
    background:"none",
    border:"none",
    position:"relative",
    width:"100%",
  },
  actions:{
    width:"50px",
    marginLeft:"auto",
    marginRight:"10px"
  },

  Notification:{
    paddingLeft:"12px",
    fontSize:"18px",
    textTransform:"uppercase",
    display:"flex"
  }
});
