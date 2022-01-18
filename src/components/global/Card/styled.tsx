import styled from 'styled-components';

interface CardContainerProps {
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

interface IconContainerProps {
}

export const IconContainer = styled.div<IconContainerProps>`
  img {
    width: 50px;
    height: 50px;
		margin-right: 15px;
  }
`

interface LabelProps {
}

export const Label = styled.h4<LabelProps>`
  margin: 3px 0;
`

interface DescriptionProps {
}

export const Description = styled.p<DescriptionProps>`
  margin: 3px 0;
  font-size: 14px;
`
