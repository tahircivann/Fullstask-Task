import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RegulatorySearchPage from './components/RegulatorySearchPage';
import Footer from './components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  background-color: #fff;
  width: 100%;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 1032px;
  overflow-y: auto;
`;

function App() {
  return (
    <Container>
      <ContentArea>
        <Sidebar />
        <MainContentWrapper>
          <Header />
          <MainContent>
            <RegulatorySearchPage />
          </MainContent>
        </MainContentWrapper>
      </ContentArea>
      <Footer />
    </Container>
  );
}

export default App;