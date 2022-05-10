const ProjectStepList = ({ steps }) => {
  console.log('Rendering project step list');

  return (
    <>
      <h3>Project Steps:</h3>
      <ul>
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
};

export default ProjectStepList;
