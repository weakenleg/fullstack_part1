const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p>The course name is {props.course}</p>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      The name of the part1 is:<Part part={props.parts[0].name}/> the number of exercises of part1 is:<Part exercise={props.parts[0].exercises}/>
      The name of the part2 is:<Part part={props.parts[1].name}/> the number of exercises of part2 is:<Part exercise={props.parts[1].exercises}/>
      The name of the part3 is:<Part part={props.parts[2].name}/> the number of exercises of part3 is:<Part exercise={props.parts[2].exercises}/>

    </div>
  );
};
const Total = (props) => {
  const totalExercises = <Part exercise={props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}/>;
  return <div>Number of exercises is:{totalExercises}</div>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

export default App;
