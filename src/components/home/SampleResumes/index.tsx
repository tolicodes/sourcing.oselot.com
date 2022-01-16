import React, { useState } from 'react';
import { TechnologyItem, ResumePreview, Container } from '../../global';

import {
  technologies as technologiesData, ITechnology,
  resumes as resumesData, IResume
} from '../../../mock';
import {
  ArrowDown, modalOverlayStyle, ModalResumeContent,
  Resumes,
  SampleResumeContainer, StyledModal,
  Technologies,
  Title
} from './styled';

export interface SampleResumeProps {
}


export function SampleResumes({...props}: SampleResumeProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeResumeIndex, setActiveResumeIndex] = useState(0)

  const openModal = (item: number) => {
    setIsOpen(true);
    setActiveResumeIndex(item)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const onNext = () => {
    switch (activeResumeIndex){
      case(resumesData.length-1):
        setActiveResumeIndex(0);
        break;
      default:
        setActiveResumeIndex(activeResumeIndex+1)
        break;
    }
  }
  const onPrevious = () => {
    switch (activeResumeIndex){
      case(0):
        setActiveResumeIndex(resumesData.length-1);
        break;
      default:
        setActiveResumeIndex(activeResumeIndex-1)
        break;
    }
  }

  return (
    <SampleResumeContainer>
      <StyledModal isOpen={modalIsOpen}
                   onRequestClose={closeModal} style={modalOverlayStyle}>
        <ArrowDown src="/assets/icons/left.svg" width="28px" alt="down" onClick={onPrevious}/>
        <ModalResumeContent src={`${resumesData[activeResumeIndex].preview}#zoom=FitW&toolbar=0&navpanes=0&scrollbar=0`}/>
        <ArrowDown src="/assets/icons/right.svg" width="28px" alt="down" onClick={onNext}/>
      </StyledModal>
      <Container>
        <Title>SAMPLE RESUMES</Title>
        <Technologies>
          {technologiesData.map((item: ITechnology) => (
            <TechnologyItem
              key={item.id}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </Technologies>
        <Resumes>
          {resumesData.map((item: IResume, index: number) => (
            <ResumePreview
              onResumeClick={()=>openModal(index)}
              key={item.id}
              preview={item.preview}
            />
          ))}
        </Resumes>
        <ArrowDown src="/assets/icons/down.svg" width="28px" alt="down"/>
      </Container>
    </SampleResumeContainer>
  );
}
