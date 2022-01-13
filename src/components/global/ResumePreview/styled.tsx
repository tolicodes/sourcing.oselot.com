import styled from 'styled-components';

interface PreviewProps {
  src: string;
  alt: string;
}

export const Preview = styled.embed<PreviewProps>`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`

interface EyeProps {
  src: string;
  alt: string;
}

export const Eye = styled.img<EyeProps>`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20%;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
`

interface ResumeContainerProps {

}

export const ResumeContainer = styled.div<ResumeContainerProps>`
  height: 180px;
  position: relative;
  border: 1px solid transparent;
  max-width: 400px;
  cursor: pointer;

  &:hover {
    border: 1px solid red;

    &::after {
      position: absolute;
      content: '';
      background-color: #E5806DC5;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 5px solid #F7B169;
    }

    ${Eye} {
      display: block;
      width: 70px;
      height: 70px;
    }
  }
`
