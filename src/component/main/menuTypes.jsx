import SuperMarket from "../../assets/superMarket.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Badge } from "react-bootstrap";
import checkRerender from "../../helpers/checkRerender";
import { useState } from "react";
import MoreMenuType from "./moreMenuType";

export default function MenuTypes() {
  checkRerender("MenuTypes");

  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div
      className="d-flex justify-content-center align-items-center mt-3 flex-wrap"
      style={{ gap: "40px" }}
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
        <Badge
          onClick={open}
          className="rounded-circle"
          style={{ height: "40px", backgroundColor: "yellow" }}
        >
          <MoreHorizIcon />
        </Badge>

        <MoreMenuType close={close} open={showDialog} />
        <p>بیشــــــــــــــــــــــتر</p>
      </div>
    </div>
  );
}
