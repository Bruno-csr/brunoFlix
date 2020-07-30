import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px; 
`;

export const Title = styled.h3`
  font-size: 35px;
  line-height: 1;
  font-weight: normal;
  padding: 5px;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 16px;

  /* 
  font-style: normal;
  background: red;
  line-height: 1;
 */
  @media (max-width: 800px) {
    font-size: 18px;
  } 
  
`;

export const ExtraLink = styled.a` 
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  overflow-x: auto;
  
  li {
    margin-right: 16px;
  }  
  /* 
  padding-bottom: 32px;
  flex-direction: row;
  
  */
`;

