import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import ListOfAllDogs from './app/pages/ListOfAllDogs';
import SearchDog from './app/pages/SearchDog';
import { useListDogs } from './app/hooks/useDogsList';
import { themes } from './assets/themes';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';



export default function App() {
  const { data, isLoading, isError } = useListDogs();

  return (
    <ThemeProvider theme={themes}>
      <MainWrapper>
        <Routes>
          <Route
            path='/'
            element={<ListOfAllDogs data={data} isLoading={isLoading} isError={isError} />}
          ></Route>
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


