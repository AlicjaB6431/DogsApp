import Dog from '../app/images/dog-1710298_1280.png'

import styled from 'styled-components';

export default function Header() {
  return (
    <MainContainer>
      <MainText>Lista ras psów</MainText>
      <HeadImage src={Dog} alt='rysunek pyszczka psa' />
      <Text>Lista ras pobierana z dog.ceo/dog-api </Text>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 90%;
`;

const MainText = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.navyBlue};
  font-size: ${(props) => props.theme.textSize.header};
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.textSize.small};
`;

const HeadImage = styled.img`
  width: 30%;
  max-width: 600px;
`;
