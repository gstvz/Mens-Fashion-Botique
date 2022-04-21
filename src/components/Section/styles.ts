import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  justify-content: center;
  color: #ffffff;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 7rem;
`;

export const TitleSpan = styled.span`
  color: #cb5454;
  font-size: 10rem;
`;

export const Info = styled.h2`
  color: #ffffff;
  font-size: 5rem;
  height: 10rem;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const Photo = styled.img`
  height: 100%;
  width: 55rem;
`;
