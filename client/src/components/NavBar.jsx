import React from "react";
import styled from "styled-components";
import Btn from "./Btn";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.text_primary};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/");

  return (
    <Container className="font-bold text-[22px] p-[14px_50px] flex justify-between items-center ">
      <h1>Create what you WANT</h1>
      {path[1] === "post" ? (
        <Btn
          onClick={() => navigate("/")}
          text={"Explore Posts..."}
          leftIcon={<ExploreRounded style={{ fontSize: "18px" }} />}
          type="secondary"
        />
      ) : (
        <Btn
          text={"Create new Image"}
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={() => navigate("/post")}  
        />
      )}
    </Container>
  );
};

export default NavBar;
