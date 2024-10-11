import React from "react";
import styled from "styled-components";
import Btn from "./Btn";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { GenerateAiImage } from "../Api";

const Form = styled.div``;
const Top = styled.div``;
const Title = styled.div`
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
  color: ${({ theme }) => theme.text_secondary};
`;
const Actions = styled.div``;

const GenerateImageForm = ({
  post,
  setPost,
  generateImageLoading,
  setGenerateImageLoading,
  createPostLoading,
  setCreatePostLoading,
}) => {
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateAiImage({
      prompt: post.prompt,
    }).then((res)=>{
      setPost({...post, photo: `data:image/jpeg;base64,${res?.data?.photo}` });
      setGenerateImageLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  };
  const createPostFun = () => {
    setCreatePostLoading(true);
  };

  return (
    <Form className="flex-1 p-[16px_20px] flex flex-col gap-[9%] justify-center">
      <Top className="flex flex-col gap-[6px] ">
        <Title className="text-[28px] font-[500] ">
          Generate Image with Prompt
        </Title>
        <Desc className="text-[17px] font-[400] ">
          Write your prompt according to image you want
        </Desc>
      </Top>
      <Body className="flex flex-col gap-[18px] text-[12px] font-[400]">
        <TextInput
          label={"Author"}
          placeholder={"Enter your name . . "}
          name={"name"}
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label={"Image Prompt"}
          placeholder={"Write a detail prompt about the image. . ."}
          name={"name"}
          rows={"8"}
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        ** You can post the AI Generated image to the Community **
      </Body>
      <Actions className="flex-1 flex gap-[8px]">
        <Btn
          text={"Generate Image"}
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={generateImageFun}
        />
        <Btn
          text={"Post Image"}
          flex
          type={"secondary"}
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={
            post.name === "" || post.prompt === "" || post.photo === ""
          }
          onClick={createPostFun}
        />
      </Actions>
    </Form>
  );
};

export default GenerateImageForm;
