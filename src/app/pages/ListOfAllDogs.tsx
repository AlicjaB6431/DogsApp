import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import BcgImage from '../images/main-background.png';
import DottsLoader from '../../components/DottsLoader';

import styled from 'styled-components';

interface DataProps {
  data?: [string];
  isLoading: boolean;
  isError: boolean;
}

export default function ListOfAllDogs({ data, isLoading, isError }: DataProps) {
  return (
    <MainContainer>
      <BackgroundImageContainer />
      <Header />
      <ContentContainer>
        {isLoading && <DottsLoader />}
        {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}

        {data && (
          <DisplayList>
            {data &&
              data.map((breed: string) => {
                const breedNames = breed.split('/');
                const splittedBreed = breedNames.join(' ').toUpperCase();
                return (
                  <SingleListItem key={breed}>
                    <SingleLinkTo to={breed}>{splittedBreed}</SingleLinkTo>
                  </SingleListItem>
                );
              })}
          </DisplayList>
        )}
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

const MainContainer = styled.div`
  height: 90%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BcgImage});
  background-size: cover;
  z-index: -1;
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
  font-size: ${(props) => props.theme.textSize.medium};
  list-style: none;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SingleListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const SingleLinkTo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color.navyBlue};
  &:hover {
    color: ${(props) => props.theme.color.blue};
  }
`;
