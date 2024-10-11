import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.black};
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container className="flex-1 p-[16px] min-h-[300px] rounded-[20px] flex gap-[16px] items-center justify-center">
      {loading ? (
        <>
          <CircularProgress style={{color:"inherit", width:"24px", height:"24px"}} />
          Loading . . .
        </>
      ) : (
        <>
          {src ? (
            <Image src={src} className="object-cover rounded-[24px] " />
          ) : (
            <> Write a prompt to generate image</>
          )}
        </>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
