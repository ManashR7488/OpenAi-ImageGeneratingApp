import React from "react";
import styled from "styled-components";
import SearchBar from "../components/Searchbar";
import ImageCard from "../components/ImageCard";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
`;

const Headline = styled.div`
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  color: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div``;
const CardWrapper = styled.div`
    display:grid;
    gap:20px;
    @media (min-width:1200px){
        grid-template-columns: repeat(4,1fr)
    }
        @media(min-width:640px) and (max-width:1199px){
        grid-template-columns: repeat(3,1fr)
    }
        @media (max-width:639px){
        grid-template-columns: repeat(2,1fr)
    }
`;

const Home = () => {

  const item = {
    photo: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    author: "Manash Ranjan",
    prompt: "Hey Prompt"
  }


  return (
    <Container className="p-[6px_10px] lg:p-[30px_30px] pb-[50px] flex flex-col items-center gap-[20px] ">
      <Headline className="text-[22px] font-[500] flex flex-col items-center lg:text-[34px]">
        Explore popular posts in the Community!
        <Span className="text-[20px] font-[800]">⦾ Generated with AI ⦾</Span>
      </Headline>
      <SearchBar />
      <Wrapper className="w-full max-w-[1400px] p-[32px_0px] flex justify-center">
        <CardWrapper>
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
            <ImageCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;
