import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver, { saveAs } from "file-saver";
const Card = styled.div`
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 1px 2px 40px 16px ${({ theme }) => theme.black + 80};
    scale: 1.05;
  }
  &:nth-child(7n + 1) {
    grid-column: auto/span 2;
    grid-row: auto/span 2;
  }
`;
const HoverOverlay = styled.div`
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Prompt = styled.div`
  color: ${({ theme }) => theme.white};
`;
const Author = styled.div``;

const ImageCard = ({ item }) => {
  return (
    <Card className="relative flex rounded-[20px]  cursor-pointer ">
      <LazyLoadImage
        style={{borderRadius: "12px"}}
        width="100%"
        alt={item?.prompt}
        src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
      />
      <HoverOverlay className="opacity-0 rounded-[6px] absolute top-0 left-0 right-0 bottom-0 p-[12px] flex flex-col items-start justify-end gap-[8px] backdrop-blur-[2px] bg-[rgba(0,0,0,0.5)]">
        <Prompt className="font-[400px] text-[15px]">{item?.prompt}</Prompt>
        <div className="w-full flex justify-between items-center">
          <Author className="font-[600px] text-[14px] flex gap-[8px] items-center">
            {" "}
            <Avatar style={{ height: "32px", width: "32px", fontSize: "15px" }}>
              {item?.author[0]}
            </Avatar>{" "}
            {item?.author}
          </Author>
          <DownloadRounded
            className="hover:text-blue-200"
            onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")}
          />
        </div>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;
