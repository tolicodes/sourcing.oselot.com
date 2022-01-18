import styled from 'styled-components';
import ReactModal from 'react-modal';

interface StyledModalProps {
}

export const modalOverlayStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  }
};

export const StyledModal = styled(ReactModal)<StyledModalProps>`
  position: absolute;
  inset: 20px;
  background: transparent;
  overflow: auto;
  outline: none;
  display: flex;
  column-gap: 16px;
 
  @media (min-width: 576px) {
    left: 50%;
    transform: translate(-50%, 0);
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 540px;
  }

  @media (min-width: 992px) {
    width: 720px;
  }

  @media (min-width: 1200px) {
    width: 960px;
  }

`;

interface ModalResumeContentProps {
  src: string;
}

export const ModalResumeContent = styled.embed<ModalResumeContentProps>`
  width: 100%;
  display: block;
  padding: 0;
  overflow: hidden;
`;

interface SampleResumeContainerProps {
}

export const SampleResumeContainer = styled.div<SampleResumeContainerProps>`
  background-color: #F7B169;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

interface TitleProps {
}

export const Title = styled.h1<TitleProps>`
  color: #ffffff;
  font-size: 42px;
  margin: 0 0 30px;
  text-align: center;
`;

interface TechnologiesProps {
}

export const Technologies = styled.div<TechnologiesProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
`;

interface ResumesProps {
}

export const Resumes = styled.div<ResumesProps>`
  display: grid;
  grid-template-columns: auto auto auto;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 992px) {
    grid-template-columns: auto auto;
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
