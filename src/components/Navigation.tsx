import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

interface SingleLinkProps {
  active: string; 
}

export default function Navigation() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSearch = location.pathname === '/search';

  return (
    <MainWrapper>
      <NavigationContainer>
        <SingleItem>
          <SingleLink to='/' active={isHomePage ? 'true' : 'false'}>
            <HomeIcon fontSize='large' />
          </SingleLink>
        </SingleItem>
        <SingleItem>
          <SingleLink to='/search' active={isSearch ? 'true' : 'false'}>
            <SearchIcon fontSize='large' />
          </SingleLink>
        </SingleItem>
      </NavigationContainer>
    </MainWrapper>
  );
}

const MainWrapper = styled.nav`
  height: 10%;
  width: 100%;
  position: fixed;
  display: flex;
  top: auto;
  bottom: 0;
  background-color: ${(props) => props.theme.color.navyBlue};

`;

const NavigationContainer = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`;

const SingleItem = styled.li`
  cursor: pointer;
  padding: 10px;
`;

const SingleLink = styled(Link)<SingleLinkProps>`
  color: ${(props) => (props.active === 'true' ? props.theme.color.blue : props.theme.color.white)};
  &:hover {
    color: ${(props) =>
      props.active === 'true' ? props.theme.color.blueHover : props.theme.color.whiteHover};
  }
`;
