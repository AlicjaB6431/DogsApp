import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import ListOfAllDogs from './pages/ListOfAllDogs';
import SearchDog from './pages/SearchDog';
import { themes } from './assets/themes';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <MainWrapper>
        <Routes>
          <Route path='/' element={<ListOfAllDogs />}></Route>
          <Route path='/search' element={<SearchDog />}></Route>
        </Routes>
        <Navigation />
      </MainWrapper>
    </ThemeProvider>
  );
}

const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
