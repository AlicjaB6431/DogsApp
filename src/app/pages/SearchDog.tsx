import { useState } from 'react';

import InfoAboutDog from './InfoAboutDog';
import DottsLoader from '../../components/DottsLoader';
import backgroungImg from '../images/single-dog-background.png';

import { TextField } from '@mui/material';
import styled from 'styled-components';

interface SearchDogProps {
  data?: [string];
  isLoading: boolean;
  isError: boolean;
}
export default function SearchDog({ data, isLoading, isError }: SearchDogProps) {
  const [searchedBreed, setSearchedBreed] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedBreed(event.target.value);
  };

  const filteredData =
    data &&
    searchedBreed &&
    data.filter((breed: string) => breed.toLowerCase().includes(searchedBreed.toLowerCase()));

  return (
    <MainWrapper>
      <BackgroundImageContainer />
      <SearchWrapper>
        {isLoading && <DottsLoader />}
        {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}
        <TextField
          id='outlined-basic'
          label='Wpisz rasę psa'
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
      <DisplayInfo>
        {searchedBreed !== '' ? (
          filteredData && filteredData.length === 1 ? (
            <InfoAboutDog filteredData={filteredData} />
          ) : filteredData && filteredData.length > 1 ? (
            <>
              <p>Wpisz nazwę jednej rasy z podpowiadanych:</p>
              <ul>
                {filteredData.map((breed) => (
                  <li key={breed}>{breed.split('/').join(' ').toUpperCase()}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Nie mamy jeszcze takiej rasy</p>
          )
        ) : null}
      </DisplayInfo>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const BackgroundImageContainer = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${backgroungImg});
  background-size: cover;
  z-index: -1;
  opacity: 0.2;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 90%;
`;
const DisplayInfo = styled.div`
  position: absolute;
  top: 200px;
`;
const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
