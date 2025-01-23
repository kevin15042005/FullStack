const Part = (props) => {
  return (
    <div>
      <p>{props.name}: {props.exercises} ejercicios</p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Total de ejercicios: {props.ejercicioTotales}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <div>
        <Header name={course} />
      </div>

      <div>
        <h1>Veremos los ejercicio 1.1</h1>
        <p>Paso a paso se avanza</p>
        <Content
          part1={part1} exercises1={exercises1}
          part2={part2} exercises2={exercises2}
          part3={part3} exercises3={exercises3}
        />
        <Total ejercicioTotales={exercises1 + exercises2 + exercises3} />
      </div>
    </>
  );
};

export default App;
