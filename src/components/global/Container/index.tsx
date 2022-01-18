// import './styles.scss';
import styled from 'styled-components';

export interface ContainerProps {
}

export const Container = styled.div<ContainerProps>`
    padding: 0 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
	z-index: 2;

  @media (min-width: 576px) {
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

`
