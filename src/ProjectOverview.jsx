import { useState } from 'react';

import ProjectStepList from './ProjectStepList';

const ProjectOverview = () => {
  console.log('Rendering project overview');
  const [currentTime, setCurrentTime] = useState(Date());
  const update = () => {
    console.log('Updating current time');
    setCurrentTime(Date());
  };

  const [projectSteps] = useState(['Sort out details', 'Implement', 'Ship']);

  return (
    <>
      <div>Current time: {currentTime}</div>
      <button onClick={update}>Update current time</button>

      <ProjectStepList steps={projectSteps} />
    </>
  );
};

export default ProjectOverview;
