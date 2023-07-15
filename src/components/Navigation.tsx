import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

interface SingleLinkProps {
  active: boolean;
}

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSearch = location.pathname === '/search';

  return (
    <MainWrapper>
      <NavigationContainer>
        <SingleItem>
          <SingleLink to='/' active={isHomePage}>
            <HomeIcon fontSize='large' />
          </SingleLink>
        </SingleItem>
        <SingleItem>
          <SingleLink to='/search' active={isSearch}>
            <SearchIcon fontSize='large' />
          </SingleLink>
        </SingleItem>
      </NavigationContainer>
    </MainWrapper>
  );
}

const MainWrapper = styled.nav`
  position: fixed;
  top: auto;
  bottom: 0;
  background-color: ${(props) => props.theme.color.navyBlue};
  width: 100%;
  display: flex;
  height: 10%;
  @media ${(props) => props.theme.device.laptop} {
  }
`;

const NavigationContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  list-style-type: none;
  @media ${(props) => props.theme.device.laptop} {
    list-style-type: none;
    text-align: center;
  }
`;
const SingleItem = styled.li`
  cursor: pointer;
  padding: 10px;
`;

const SingleLink = styled(Link)<SingleLinkProps>`
  color: ${(props) => (props.active ? props.theme.color.blue : props.theme.color.white)};
  &:hover {
    color: ${(props) =>
      props.active ? props.theme.color.blueHover : props.theme.color.whiteHover};
  }
`;
