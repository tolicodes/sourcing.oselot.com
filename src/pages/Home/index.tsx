import React from 'react';
import { SampleResumes } from '../../components/home';
import {WorkWithUs} from "../../components/home/WorkWithUs";

interface HomeProps {
}

function Home({ ...props }: HomeProps) {
  return (
    <div>
      <WorkWithUs />
      <SampleResumes />
    </div>
  );
}

export default Home;
