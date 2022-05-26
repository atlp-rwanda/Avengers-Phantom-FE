import ReactDOM from "react-dom";
import * as React from "react";
import "./modal.scss";
// import Close from "./times-solid.svg";ReactDOM.createPortal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Modal = ({ show, close, title, children }) => {
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title"> {title} </h2>
              {/* <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button> */}
            </header>
            <main className="modal_content"> {children} </main>
            <footer className="modal_footer">
              {/* <button className="modal-close" onClick={() => close()}>
              Cancel
            </button> */}
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Button
                  onClick={() => Toggle()}
                  color="secondary"
                  variant="contained"
                  sx={{
                    height: "30.16px",
                    width: "90.37px",
                    borderRadius: "45.125px",
                    boxSizing: "border-box",
                    ml: "100px",
                  }}
                >
                  <Typography sx={{ mx: "auto", width: "118.37px" }}>
                    yes
                  </Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{
                    height: "30.16px",
                    width: "90.37px",
                    borderRadius: "45.125px",
                    boxSizing: "border-box",
                    ml: "10px",
                    backgroundColor: "#bd2424",
                  }}
                >
                  <Typography sx={{ mx: "auto", width: "118.37px" }}>
                    cancel
                  </Typography>
                </Button>
              </Box>

              {/* <button className="submit">Submit</button> */}
            </footer>
          </div>
        </div>
      ) : null}
      ,{/* document.getElementById("modal") */}
    </>
  );
};

export default Modal;
