import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
// import { smallImage } from "../util";
import { popup } from "../animations";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  //Load Detail Handler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <Link to={`/game/${id}`}>
      <StyledGame
        variants={popup}
        initial="hidden"
        animate="show"
        layoutId={stringPathId}
        onClick={loadDetailHandler}
      >
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <div></div>
        <p>{released}</p>

        <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
      </StyledGame>
    </Link>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 60vh;
  box-shadow: 2px 5px 10px rgba(225, 225, 225, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: bottom;
  border-radius: 1rem;

  overflow: hidden;
  position: relative;

  background: rgb(45, 45, 45);
  background: linear-gradient(
    0deg,
    rgba(45, 45, 45, 0.6533963927367823) 20%,
    rgba(247, 247, 247, 0.1632003143054097) 100%,
    rgba(0, 0, 0, 0.5777661406359419) 100%
  );
  :hover {
    background: linear-gradient(
      0deg,
      rgba(45, 45, 45, 0.4) 20%,
      rgba(247, 247, 247, 0.3) 100%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
  h3,
  p {
    margin-left: 1rem;
  }
  div {
    width: 90%;
    height: 5px;
    background-color: #f23557;
    top: -15px;
    position: relative;
    margin: 0 auto;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    object-fit: cover;
    z-index: -2;
  }
`;

export default Game;
