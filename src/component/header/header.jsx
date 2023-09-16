import {
  AppBar,
  Box,
  Chip,
  Divider,
  Hidden,
  InputBase,
  Toolbar,
} from "@mui/material";
import Adverestement from "../../assets/adverestement1.webp";
import SearchIcon from "@mui/icons-material/Search";
import checkRerender from "../../helpers/checkRerender";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

export default function Header() {
  checkRerender("header");
  const [hideHeader, setHideHeader] = useState(false);

  window.addEventListener("scroll", () => {
    console.log(hideHeader);
    if (window.scrollY > 300) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  });

  return (
    <>
      <AppBar hidden={hideHeader}>
        <div>
          <img
            src={Adverestement}
            className="adverestement"
            alt="adverestement"
          />
        </div>
        <Toolbar
          sx={{
            height: "80px",
            backgroundColor: "white",
            boxShadow: "1px 1px 10px black",
            justifyContent: "space-between",
          }}
        >
          <Hidden smDown>
            <Chip
              sx={{
                fontSize: "35pt",
                fontWeight: "bold",
                height: "fit-content",
              }}
              label="DIGI PR"
            />
          </Hidden>

          <div>
            <Box sx={{ backgroundColor: "rgba(320,320,320,0.4)" }}>
              <SearchIcon
                sx={{ height: "30px", width: "30px", backgroundColor: "lime" }}
              />
              <InputBase sx={{ border: "1px blue solid", height: "30px" }} />
            </Box>

            <div className="d-flex justify-content-around align-items-center mt-1">
              <ShoppingBasketIcon sx={{ color: "black", float: "left" }} />

              <Dropdown as={ButtonGroup} style={{ direction: "ltr" }}>
                <Button variant="success">منو</Button>

                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">غذا ها</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">میوه ها</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">کتاب ها</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
