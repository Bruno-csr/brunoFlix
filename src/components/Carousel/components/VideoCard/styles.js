import styled from 'styled-components';

export const VideoCardContainer = styled.a`
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
  
  /* 
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  border-radius: 10px;
  position: relative;
  align-items: flex-end;
  padding: 16px;

  &:not(:first-child) {
    margin-left: 20px;
  } 
  */
`;
