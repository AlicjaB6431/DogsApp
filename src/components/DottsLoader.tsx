import styled, { keyframes } from 'styled-components';

interface SingleDotProps {
  delay?: number;
}

export default function DottsLoader() {
  return (
    <LoaderWrapper>
      <SingleDot delay={0.0}></SingleDot>
      <SingleDot delay={0.2}></SingleDot>
      <SingleDot delay={0.4}></SingleDot>
    </LoaderWrapper>
  );
}

const BouncingLoader = keyframes`
  to {
    opacity: 0.4;
    transform: translateY(-16px);
  }
`;

const SingleDot = styled.div<SingleDotProps>`
  width: 16px;
  height: 16px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color: #a3a1a1;
  opacity: 1;
  animation: ${BouncingLoader} 0.6s infinite alternate;
  animation-delay: ${({ delay }) => (delay === 1 ? 0 : delay + 's')};
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
