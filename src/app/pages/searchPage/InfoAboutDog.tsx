import { useImages } from '../../hooks/useImages';

import styled from 'styled-components';
import { Skeleton } from '@mui/material';
import errImg from '../../images/corgi.png';
import TextInfo from './TextInfo';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface InfoAboutDogProps {
  filteredData: string[];
}

export default function InfoAboutDog({ filteredData }: InfoAboutDogProps) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const breedNames = filteredData.join(', ').split('/');
  const splittedBreed = breedNames.join(' ').toUpperCase();
  const selectedBreed = breedNames[0];
  const selectedSubBreed = breedNames[1];

  const { data, isError, isLoading } = useImages(selectedBreed, selectedSubBreed);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [carousel?.current?.scrollWidth]);

  return (
    <MainWrapper>
      {isError && <ErrorText>Problem z pobraniem danych</ErrorText>}
      <InfoContainer>
        <CarouselWrapper>
          <Carousel ref={carousel} whileTap={{ cursor: 'grabbing' }}>
            <InnerCarousel drag='x' dragConstraints={{ right: 0, left: -width }}>
              {data &&
                data.map((image: string) => {
                  return (
                    <ImageCard key={image}>
                      {isLoading ? (
                        <Skeleton variant='rectangular' width={200} height={200} />
                      ) : (
                        <SingleImg
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            const target = e.target as HTMLImageElement;
                            target.src = errImg;
                          }}
                          alt={splittedBreed}
                          src={image}
                        />
                      )}
                    </ImageCard>
                  );
                })}
            </InnerCarousel>
          </Carousel>
        </CarouselWrapper>
        <BreedHeader>{splittedBreed}</BreedHeader>
        <TextInfo />
      </InfoContainer>
    </MainWrapper>
  );
}
const CarouselWrapper = styled.div`
  position: relative;
  height: 250px;
  max-width: 1124px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Carousel = styled(motion.div)`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  cursor: grab;
  overflow-x: hidden;
`;
const InnerCarousel = styled(motion.div)`
  display: flex;
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 20px;
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
  justify-content: space-between;
`;

const ImageCard = styled(motion.div)`
  height: 200px;
  min-width: 200px;
  margin: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

const SingleImg = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`;

const ErrorText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
