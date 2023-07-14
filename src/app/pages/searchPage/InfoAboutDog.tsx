import { useImages } from '../../hooks/useImages';
import styled from 'styled-components';
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

  const { data, isError, isLoading } = useImages(selectedBreed, selectedSubBreed);

  return (
    <MainWrapper>
      {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}

      <InfoContainer>
        <h1>{splittedBreed}</h1>
        <ImageCard>
          {isLoading ? (
            <Skeleton variant='rectangular' width={300} height={200} />
          ) : (
            <SingleImg
              style={{
                width: 300,
                height: 200,
              }}
              alt='pies'
              src={data[0]}
            />
          )}
        </ImageCard>
      </InfoContainer>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  overflow: scroll;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ImageCard = styled.div`
  display: flex;
  width: 280px;
  height: 280px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;
`;
const SingleImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-position: center;
`;
