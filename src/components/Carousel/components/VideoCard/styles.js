import styled from 'styled-components';

const VideoCardContainer = styled.a`
  height: 165px;
  width: 298px;

  display: inline-block;

  border: 2px solid;
  border-radius: 4px;

  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default VideoCardContainer;
