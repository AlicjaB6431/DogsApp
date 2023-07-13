import { useImages } from '../hooks/useImages';
import styled from 'styled-components';
import DottsLoader from '../../components/DottsLoader';
import { Skeleton } from '@mui/material';

interface InfoAboutDogProps {
  filteredData: string[];
}

export default function InfoAboutDog({ filteredData }: InfoAboutDogProps) {
  const breedToString = filteredData.join(', ');
  const breedNames = breedToString.split('/');
  const splittedBreed = breedNames.join(' ').toUpperCase();

  const selectedBreed = breedNames[0];
  const selectedSubBreed = breedNames[1];

  const { data, isLoading, isError, isFetching } = useImages(selectedBreed, selectedSubBreed);

  return (
    <MainContainer>
      {isLoading && <DottsLoader />}
      {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}
      <h1>{splittedBreed}</h1>

      {isFetching ? (
        <Skeleton variant='rectangular' width={300} height={200} />
      ) : (
        data && (
          <img
            style={{
              width: 300,
              height: 200,
            }}
            alt={breedToString}
            src={data[0]}
          />
        )
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
