import React  from 'react';
import {Card, Container} from '../../global';

import {
  ArrowDown, BackgroundImage, Perks, SubTitle, Text,
  Title, WorkWithUSContainer
} from './styled';
import {perks, IPerk} from "../../../mock";

export interface WorkWithUsProps {
}


export function WorkWithUs({...props}: WorkWithUsProps) {
  return (
    <WorkWithUSContainer>
      <BackgroundImage src={'/assets/icons/Logo.svg'}/>
      <Container>
        <Title>WORK WITH US</Title>
        <Text>
          Oselot Staffing is a forward thinking Staffing company. We focus on recruiting only the top talent and work with only the very best companies.<br/>
          We have a very rigorous interview process(lasts a total of ^6 hours) where we be determining not only your technical skills, but who you are as a person.
          We care about having perfect culture fits for every one of our placements.<br/> Once you're hired, you will initially start off working on our internal projects,
          but eventually be placed with one of our clients.
        </Text>
        <SubTitle>CULTURE</SubTitle>
        <Text>
          We value culture above all else, which is why we take exceptional care of our employees. We make sure that the projects and clients our employees work with match their specific talents and passion.
          We ensure that all our employees are challenged and constantly learning new things.
        </Text>
        <SubTitle>PERKS</SubTitle>
        <Perks>
        {perks.map((item)=>
          <Card icon={item.icon} label={item.label} description={item.description}/>
        )}</Perks>
        <ArrowDown src="/assets/icons/down.svg" width="28px" alt="down"/>
      </Container>
    </WorkWithUSContainer>
  );
}
