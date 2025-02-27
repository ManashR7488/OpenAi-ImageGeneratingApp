import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/post" element={<CreatePost />} />


              <Route path="/*" element={<div className="w-screen text-center h-screen flex items-center justify-center">Page Not Found</div>}/>
              {/* Add more routes here */}
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
