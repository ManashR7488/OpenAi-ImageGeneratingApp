import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container className="p-[6px_10px] lg:p-[30px_30px] pb-[50px] flex flex-col justify-center items-center gap-[20px] ">
      <Wrapper className="w-full max-w-[1200px] p-[32px_0px] flex gap-[8%] flex-1 h-fit justify-center flex-col md:flex-row ">
        <GenerateImageForm
          post={post}
          setPost={setPost}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          createPostLoading={createPostLoading}
          setCreatePostLoading={setCreatePostLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
