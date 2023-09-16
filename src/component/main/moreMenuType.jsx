import { Box, Modal, Typography } from "@mui/material";
import SuperMarket from "../../assets/superMarket.png";
import moreWork from "../../assets/moreWorks.png";
import checkRerender from "../../helpers/checkRerender";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "90%",
};

export default function MoreMenuType({ open, close }) {
  checkRerender("moreMenuType");
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div className="text-center">
              <img
                style={{ height: "70px", width: "70px" }}
                src={SuperMarket}
                alt="superMarket"
              />
              <p>سوپر مارکت</p>
            </div>

            <div className="text-center">
              <img
                style={{ height: "70px", width: "70px" }}
                src={SuperMarket}
                alt="superMarket"
              />
              <p>سوپر مارکت</p>
            </div>

            <div className="text-center">
              <img
                style={{ height: "70px", width: "70px" }}
                src={SuperMarket}
                alt="superMarket"
              />
              <p>سوپر مارکت</p>
            </div>
          </Box>

          <Box>
            <Typography variant="h5" color="primary">
              خدمات ما
            </Typography>

            <div className="more_works">
              <div
                className="d-flex align-items-center"
                style={{
                  height: "90px",
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: "#E7E7E7",
                }}
              >
                <img src={moreWork} alt="moreWork" style={{ height: "40px" }} />
                <div style={{ marginRight: "10px" }}>
                  <h6>دیجی پی</h6>
                  <p style={{ fontSize: "10pt" }}>
                    لورم لورم لورم لورم لورم لورم لورم
                  </p>
                </div>

                <i
                  className="fa fa-arrow-left"
                  style={{
                    top: "-30px",
                    position: "relative",
                    fontSize: "27pt",
                  }}
                ></i>
              </div>

              <div
                className="d-flex align-items-center"
                style={{
                  height: "90px",
                  borderRadius: "10px",
                  padding: "20px",
                  backgroundColor: "#E7E7E7",
                }}
              >
                <img src={moreWork} alt="moreWork" style={{ height: "40px" }} />
                <div style={{ marginRight: "10px" }}>
                  <h6>دیجی پی</h6>
                  <p style={{ fontSize: "10pt" }}>
                    لورم لورم لورم لورم لورم لورم لورم
                  </p>
                </div>

                <i
                  className="fa fa-arrow-left"
                  style={{
                    top: "-30px",
                    position: "relative",
                    fontSize: "27pt",
                  }}
                ></i>
              </div>
            </div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
