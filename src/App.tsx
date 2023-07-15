import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import ListOfAllDogs from './app/pages/homePage/ListOfAllDogs';
import SearchDog from './app/pages/searchPage/SearchDog';
import { useListDogs } from './app/hooks/useDogsList';
import { themes } from './assets/themes';
import BcgImage from './app/images/main-background.png';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const { data, isLoading, isError } = useListDogs();

  return (
    <ThemeProvider theme={themes}>
      <MainWrapper>
        <BackgroundImageContainer />
        <Routes>
          <Route
            path='/'
            element={<ListOfAllDogs data={data} isLoading={isLoading} isError={isError} />}
          />
          <Route
            path='/search'
            element={<SearchDog data={data} isLoading={isLoading} isError={isError} />}
          />
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

const BackgroundImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BcgImage});
  background-size: cover;
  z-index: -1;
`;
