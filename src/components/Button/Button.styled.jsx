import styled from '@emotion/styled';

export const LoadMore = styled.button`
 position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: #3d3a4e;
  background-size: 400%;
  color: #fff;
  border: none;

  &:hover::before {
    transform: scaleX(1);
  }

  & span {
    position: relative;
    z-index: 5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(254, 232, 0, 0.62) 94.3%);
    transition: all 0.475s;
  }
`;
