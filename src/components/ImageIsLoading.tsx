import styled from 'styled-components';
import { Skeleton } from '@mui/material';

export default function ImageIsLoading() {
  return (
    <SkeletonContainer>
      <ImageCard>
        <SkeletonItem width={200} height={200} variant='rectangular' />
      </ImageCard>
      <ImageCard>
        <SkeletonItem width={200} height={200} variant='rectangular' />
      </ImageCard>
      <ImageCard>
        <SkeletonItem width={200} height={200} variant='rectangular' />
      </ImageCard>
      <ImageCard>
        <SkeletonItem width={200} height={200} variant='rectangular' />
      </ImageCard>
    </SkeletonContainer>
  );
}

const SkeletonContainer = styled.div`
  display: flex;
`;

const SkeletonItem = styled(Skeleton)`
  border-radius: 15px;
`;

const ImageCard = styled.div`
  height: 200px;
  min-width: 200px;
  margin: 15px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 18px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 18px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
