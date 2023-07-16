import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import InfoAboutDog from './InfoAboutDog';
import DottsLoader from '../../../components/DottsLoader';
import GeneralInfo from './GeneralInfo';

import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useEffect } from 'react';
import breedNotFound from '../../images/breedNotFound.png';
import searchDogImg from '../../images/searchDogImg.png';

interface SearchDogProps {
  data?: [string];
  isLoading: boolean;
  isError: boolean;
}

export default function SearchDog({ data, isLoading, isError }: SearchDogProps) {
  const [searchedBreed, setSearchedBreed] = useState('');

  const location = useLocation();
  const breed = location.state?.breed;

  useEffect(() => {
    breed && setSearchedBreed(breed);
  }, [breed]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /\s+/g;
    const searchedValue = event.target.value.replace(regex, '/');
    setSearchedBreed(searchedValue);
  };

  const handleSetBreed = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const chosenBreed = event.currentTarget.innerText;
    const readyToSearch = chosenBreed.split(' ').join('/');
    setSearchedBreed(readyToSearch);
  };

  const filteredData =
    data &&
    searchedBreed &&
    data.filter((breed: string) => breed.toLowerCase().includes(searchedBreed.toLowerCase()));

  const generateDogInfo =
    searchedBreed !== '' ? (
      filteredData && filteredData.length === 1 ? (
        <InfoAboutDog filteredData={filteredData} />
      ) : filteredData && filteredData.length > 1 ? (
        <>
          <InfoText>Wpisz albo wybierz jedną z podpowiadanych ras:</InfoText>
          <DisplayList>
            {filteredData.map((breed) => (
              <SingleListItem key={breed} onClick={handleSetBreed}>
                {breed.split('/').join(' ').toUpperCase()}
              </SingleListItem>
            ))}
          </DisplayList>
        </>
      ) : (
        <GeneralInfo
          text={'Nie znamy takej rasy, spróbuj wyszukać inną'}
          altInfo={'Corgi na niebieskim tle'}
          image={breedNotFound}
        />
      )
    ) : (
      <GeneralInfo
        text={'Wyszukaj rasę psa jaka Cię interesuje'}
        image={searchDogImg}
        altInfo={'Rysunek rudego psa'}
      />
    );

  return (
    <MainWrapper>
      <SearchWrapper>
        {isLoading && <DottsLoader />}
        {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}
        <TextField
          id='outlined-basic'
          label='Wpisz rasę psa...'
          variant='outlined'
          onChange={handleSearch}
          sx={{
            width: '90%',
            '& label': {
              fontSize: '22px',
              display: 'flex',
              alignItems: 'center',
            },
          }}
          InputProps={{
            style: {
              fontSize: '22px',
            },
          }}
        />
      </SearchWrapper>
      <DisplayInfo>{generateDogInfo}</DisplayInfo>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  height: 90%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: transparent;
  &::-webkit-scrollbar {
    width: 6px;

    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
`;

const SearchWrapper = styled.div`
  width: 90%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const DisplayInfo = styled.div`
  height: 100%;
  width: 100%;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoText = styled.p`
  max-width: 90%;
  font-size: ${(props) => props.theme.textSize.small};
  text-align: center;
`;

const DisplayList = styled.ul`
  font-size: ${(props) => props.theme.textSize.small};
  display: flex;
  flex-direction: column;
  @media (${(props) => props.theme.device.tablet}) {
    font-size: ${(props) => props.theme.textSize.medium};
  }
`;

const SingleListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
