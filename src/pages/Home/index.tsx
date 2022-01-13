import React from 'react';
import { SampleResumes } from '../../components/home';

interface HomeProps {
}

function Home({ ...props }: HomeProps) {
  return (
    <SampleResumes />
  );
}

export default Home;
