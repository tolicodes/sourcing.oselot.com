import styled from 'styled-components';

interface BackgroundImageProps {
}

export const BackgroundImage = styled.img<BackgroundImageProps>`
  position: absolute;
  z-index: 1;
  width: 80%;
  max-width: 900px;
  left: -10%;
  bottom: 0;
`;

interface WorkWithUSContainerProps {
}

export const WorkWithUSContainer = styled.div<WorkWithUSContainerProps>`
  background-color: #DF6246;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  position: relative;
`;

interface TitleProps {
}

export const Title = styled.h1<TitleProps>`
  color: #ffffff;
  font-size: 42px;
  margin: 0 0 30px;
  text-align: center;
`;

interface SubTitleProps {
}

export const SubTitle = styled.h1<SubTitleProps>`
  color: #ffffff;
  text-align: center;
`;

interface TextProps {
}

export const Text = styled.p<TextProps>`
  color: #ffffff;
  text-align: center;
`;

interface PerksProps {
}

export const Perks = styled.div<PerksProps>`
  display: grid;
  grid-template-columns: auto auto;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0 50px 0;

  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
`;

interface ArrowDownProps {
  src: string;
  alt: string;
  width: string;
}

export const ArrowDown = styled.img<ArrowDownProps>`
  object-fit: contain;
  margin: auto;
  cursor: pointer;
`;
