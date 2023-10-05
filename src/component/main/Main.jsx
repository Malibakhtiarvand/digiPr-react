import { Container } from "@mui/material";
import checkRerender from "../../helpers/checkRerender";
import Categories from "./categories";
import MenuTypes from "./menuTypes";
import SpecialOffer from "./SpecialOffer";
import Slider from "./swiper";
import Type2 from "./Type2";

export default function Main() {
  checkRerender("main");

  return (
    <>
      <Container>
        <Slider />
        <MenuTypes />
        <SpecialOffer />
        <Type2 />
        <Categories />
      </Container>
    </>
  );
}
