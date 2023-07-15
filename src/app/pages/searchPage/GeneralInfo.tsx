import { styled } from 'styled-components';

interface GeneralInfoProps {
  text: string;
  image: string;
  altInfo: string;
}

export default function GeneralInfo({ text, image, altInfo }: GeneralInfoProps) {
  return (
    <MainWrapper>
      <ImageCard>
        <SingleImg src={image} alt={altInfo} />
      </ImageCard>
      <InfoText>{text}</InfoText>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoText = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.textSize.small};
`;
const ImageCard = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const SingleImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-position: center;
`;
