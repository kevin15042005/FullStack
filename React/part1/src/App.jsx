import { useState } from "react";

// Componentes de la página de inicio

// Componente Hello
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Tu nombre es {name}, y tu edad es {age} años
      </p>
      <p>
        {name}, tu año de nacimiento es {bornYear()}
      </p>
    </div>
  );
};

// Componente Footer
const Footer = () => (
  <div>
    <p>Creando un footer</p>
  </div>
);

// Componente Header
const Header = ({ course1 }) => <h1>{course1}</h1>;

// Componente Content
const Content = ({ part }) => (
  <div>
    {part.map((p, index) => (
      <p key={index}>
        {p.name}: {p.exercises}
      </p>
    ))}
  </div>
);

// Componente Total
const Total = ({ part }) => {
  const total = part.reduce((sum, p) => sum + p.exercises, 0);
  return <p>Total de ejercicios: {total}</p>;
};

// Componente Display
const Display = ({ counter }) => <div>{counter}</div>;

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>La app aún no ha registrado clicks</div>;
  }
  return <div>Historial de clicks: {allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// Componente Principal App
const App = () => {
  // Componentes principales inicio de todo el conocimiento
  const user = { name: "Kevin", age: 20 };

  const friends = [
    { name: "Peter", age: 14 },
    { name: "Maya", age: 10 },
  ];

  const course1 = "Half Stack application development";
  const part = [
    { name: "Fundamentos de React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "Estado del componente", exercises: 14 },
  ];

  // Estado del contador
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  // Estado para clicks izquierdos y derechos
  const [clicks, setClicks] = useState({ lefth: 0, rigth: 0 });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLefthClick = () => {
    const updatedLeft = clicks.lefth + 1;
    setAll(allClicks.concat("L"));
    setClicks({ ...clicks, lefth: updatedLeft });
    setTotal(updatedLeft + clicks.rigth);
  };

  const handleRightClick = () => {
    const updatedRight = clicks.rigth + 1;
    setAll(allClicks.concat("R"));
    setClicks({ ...clicks, rigth: updatedRight });
    setTotal(clicks.lefth + updatedRight);
  };

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={user.name} age={user.age} />
      <Hello name="Kevin" age={19} />

      <p>
        El nombre es {friends[0].name} y tiene {friends[0].age} años
      </p>
      <p>
        El nombre es {friends[1].name} y tiene {friends[1].age} años
      </p>

      <Header course1={course1} />
      <Content part={part} />
      <Total part={part} />

      <Footer />

      <div>
        <p>Contador:</p>
        <Display counter={counter} />
        <button onClick={increaseByOne}>plus</button>
        <button onClick={decreaseByOne}>minus</button>
        <button onClick={setToZero}>zero</button>
      </div>

      <div>
        <p>Clicks</p>
        <p>Izquierda: {clicks.lefth}</p>
        <button onClick={handleLefthClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        <p>Derecha: {clicks.rigth}</p>
        <p>{allClicks.join(" ")}</p>
        <p>El total de los clicks es {total}</p>
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

export default App;
