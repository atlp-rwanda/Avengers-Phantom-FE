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
    marginRight: "50px",
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
  },
  clientSideBar: {
    padding: "0px 0px 0px 60px",
  },
  // clientSideBarNormal: {
  //   padding: "0px 60px 0px 0px",
  // },
  toggleButton: {
    color: "#FFF",
    padding: "10px",
  },
  formFields: {
    display: "flex",
    padding: "0 0 0 20px",
  },
  title: {
    color: "#FFF",
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
});