import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import InfoAboutDog from './InfoAboutDog';
import DottsLoader from '../../../components/DottsLoader';

import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useEffect } from 'react';

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
    setSearchedBreed(event.target.value);
  };

  const filteredData =
    data &&
    searchedBreed &&
    data.filter((breed: string) => breed.toLowerCase().includes(searchedBreed.toLowerCase()));

  const handleSetBreed = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const chosenBreed = event.currentTarget.innerText;
    const splittedBreed = chosenBreed.split(' ');
    const readyToSearch = splittedBreed.join('/');
    setSearchedBreed(readyToSearch);
  };

  return (
    <MainWrapper>
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
              <p>Wpisz albo wybierz jedną z podpowiadanych ras:</p>
              <DisplayList>
                {filteredData.map((breed) => (
                  <SingleListItem key={breed} onClick={handleSetBreed}>
                    {breed.split('/').join(' ').toUpperCase()}
                  </SingleListItem>
                ))}
              </DisplayList>
            </>
          ) : (
            <p>Nie mamy jeszcze takiej rasy</p>
          )
        ) : (
          <p>Wpisz jakiej rasy szukasz</p>
        )}
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
  overflow: scroll;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 90%;
`;
const DisplayInfo = styled.div`
  top: 200px;
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

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
