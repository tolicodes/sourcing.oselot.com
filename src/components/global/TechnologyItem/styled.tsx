import styled from 'styled-components';

interface TechnologyContainerProps {
}

export const TechnologyContainer = styled.div<TechnologyContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`

interface IconContainerProps {
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: #8A4535;
  border: 5px solid #EEA669;
  border-radius: 100%;

  img {
    width: 30px;
    height: 30px;
  }
`

interface LabelProps {
}

export const Label = styled.p<LabelProps>`
  margin: 3px 0;
  font-size: 14px;
  width: 70px;
  text-align: center;
`
