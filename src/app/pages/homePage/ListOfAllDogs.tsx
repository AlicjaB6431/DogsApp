import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

import Header from '../../../components/Header';
import PaginationComponent from '../../../components/Pagination';
import DottsLoader from '../../../components/DottsLoader';

import styled from 'styled-components';

interface DataProps {
  data?: [string];
  isLoading: boolean;
  isError: boolean;
}

export default function ListOfAllDogs({ data, isLoading, isError }: DataProps) {
  const [currentBreed, setCurrentBreed] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const breedsPerPage = 25;
  const lastBreedIndex = currentBreed * breedsPerPage;
  const firstBreedIndex = lastBreedIndex - breedsPerPage;
  const currentPosts = data && data.slice(firstBreedIndex, lastBreedIndex);

  const totalBreeds = data ? data.length : 0;

  const navigate = useNavigate();

  const navigateToSearch = (breed: string) => {
    navigate('/search', { state: { breed } });
  };

  const generateDogsList =
    currentPosts &&
    currentPosts.map((breed: string) => {
      const breedNames = breed.split('/');
      const splittedBreed = breedNames.join(' ').toUpperCase();
      return (
        <SingleListItem key={breed} onClick={() => navigateToSearch(breed)}>
          {splittedBreed}
        </SingleListItem>
      );
    });

  return (
    <MainContainer ref={containerRef}>
      <Header />
      <ContentContainer>
        {isLoading && <DottsLoader />}
        {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}

        {data && data.length > 0 && <DisplayList>{generateDogsList}</DisplayList>}
        <PaginationContainer>
          <PaginationComponent
            totalBreeds={totalBreeds}
            breedsPerPage={breedsPerPage}
            setCurrentBreed={setCurrentBreed}
            containerRef={containerRef}
          />
        </PaginationContainer>
      </ContentContainer>
    </MainContainer>
  );
}

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PaginationContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;

const DisplayList = styled.ul`
  font-size: ${(props) => props.theme.textSize.small};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SingleListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.color.navyBlue};
  &:hover {
    color: ${(props) => props.theme.color.blue};
  }
`;
