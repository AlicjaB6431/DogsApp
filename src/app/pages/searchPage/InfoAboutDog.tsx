import { useImages } from '../../hooks/useImages';

import styled from 'styled-components';
import { Skeleton } from '@mui/material';
import errImg from '../../images/corgi.png';
import TextInfo from './TextInfo';
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
        <ImageCard>
          {isLoading ? (
            <Skeleton variant='rectangular' width={300} height={200} />
          ) : (
            <SingleImg
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = errImg;
              }}
              alt={splittedBreed}
              src={data[0]}
            />
          )}
        </ImageCard>
        <BreedHeader>{splittedBreed}</BreedHeader>
        <TextContainer>
          <TextInfo />
        </TextContainer>
      </InfoContainer>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  margin-top: 20px;
  height: 100%;
`;

const BreedHeader = styled.h1`
  font-size: ${(props) => props.theme.textSize.medium};
  text-align: center;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const TextContainer = styled.div`
  width: 90%;
`;
const SingleImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
