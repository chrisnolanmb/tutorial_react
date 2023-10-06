import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

// Componente que utiliza useState
/*
El hook useState es una función que se utiliza en React para agregar estado a los componentes funcionales.
se utiliza el hook useState en el componente Contador para agregar un estado llamado contador y una función llamada setContador que permite actualizar el valor del estado contador.
se utiliza la función incrementarContador para incrementar el valor del estado contador en 1 cada vez que se hace clic en el botón "Incrementar".
*/

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
    console.log("Ejecutando el useEffect");
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>El contador es: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

// Componente que utiliza useEffect

/*
muestra un componente de React llamado EjemploUseEffect que utiliza el hook useEffect. El hook useEffect se utiliza para ejecutar efectos secundarios en componentes funcionales de React.
En este caso, el efecto secundario que se está ejecutando es simplemente imprimir un mensaje en la consola cada vez que el estado contador cambia. El segundo argumento de useEffect es un array de dependencias, que indica a React cuándo debe volver a ejecutar el efecto. En este caso, el efecto se ejecutará cada vez que el estado contador cambie.
Además, el componente tiene un botón que, al hacer clic, llama a la función incrementarContador, que actualiza el estado contador mediante la función setContador.
*/

const EjemploUseEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Ejecutando el useEffect");
  }, [contador]);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Ejemplo UseEffect</h2>
      <p>El contador es: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

// Componente que utiliza useContext
/**
 * El hook useContext se utiliza para acceder a un contexto en React. Un contexto es una forma de pasar datos a través del árbol de componentes de React sin tener que pasar props manualmente a través de cada nivel.
 * En este ejemplo, se crea un contexto llamado NombreContext que se utiliza para pasar el nombre "Juan" a través del árbol de componentes de React. El componente Nombre utiliza el hook useContext para acceder al contexto NombreContext y mostrar el nombre.
 *Dentro del componente EjemploUseContext, se utiliza el componente NombreContext.Provider para proporcionar el valor del nombre al contexto. El componente Nombre utiliza el hook useContext para acceder al valor del nombre del contexto y mostrarlo en un párrafo.
 */
const NombreContext = React.createContext();

const EjemploUseContext = (props) => {
  const [state, setState] = useState({
    nombre: "Juan",
    edad: 21,
  });

  const handleNombreChange = (event) => {
    setState({
      ...state,
      nombre: event.target.value,
    });
  };

  return (
    <NombreContext.Provider value={state.nombre}>
      <h2>Ejemplo UseContext</h2>
      <input type="text" value={state.nombre} onChange={handleNombreChange} />
      <Nombre />
    </NombreContext.Provider>
  );
};

const Nombre = () => {
  const nombre = useContext(NombreContext);

  return <p>El nombre es: {nombre}</p>;
};

// Componente que utiliza useReducer
/**
 * El hook useReducer se utiliza para manejar el estado de un componente en React. Es una alternativa al hook useState que permite manejar estados más complejos.
 * En este ejemplo, se utiliza el hook useReducer para manejar el estado de un contador. El estado inicial del contador es 0 y se puede incrementar o decrementar utilizando los botones "Incrementar" y "Decrementar".
 * El hook useReducer recibe dos argumentos: un reducer y un estado inicial. El reducer es una función que recibe el estado actual y una acción y devuelve el nuevo estado. El estado inicial es el estado inicial del contador.
 * El hook useReducer devuelve el estado actual y una función dispatch que se utiliza para enviar acciones al reducer. En este ejemplo, se utiliza la función dispatch para enviar las acciones "increment" y "decrement" al reducer.
 */
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const EjemploUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Ejemplo UseReducer</h2>
      <p>El contador es: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </div>
  );
};

// Componente que utiliza useCallback
/**
 * El hook useCallback se utiliza para memorizar funciones en React. Es una alternativa al hook useMemo que permite memorizar valores.
 * En este ejemplo, se utiliza el hook useCallback para memorizar la función incrementarContador. La función incrementarContador se memoriza para que no se vuelva a crear cada vez que el estado contador cambie.
 * El hook useCallback recibe dos argumentos: una función y un array de dependencias. La función es la función que se va a memorizar. El array de dependencias es un array de valores que se utilizan dentro de la función. Si alguno de los valores del array de dependencias cambia, la función se vuelve a crear.
 * El hook useCallback devuelve la función memorizada.
 */
const EjemploUseCallback = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [callbackEjecutado, setCallbackEjecutado] = useState(false);

  const memoizedCallback = useCallback(() => {
    console.log("Ejecutando el useCallback");
    setCallbackEjecutado(true);
  }, [a, b]);

  const incrementarA = () => {
    setA(a + 1);
  };

  const incrementarB = () => {
    setB(b + 1);
  };

  return (
    <div>
      <h2>Ejemplo UseCallback</h2>
      <button onClick={incrementarA}>Incrementar A</button>
      <button onClick={incrementarB}>Incrementar B</button>
      <button onClick={memoizedCallback}>Ejecutar Callback</button>
      {/* Monstrar los incrementos y el callback */}
      <p>El valor de A es: {a}</p>
      <p>El valor de B es: {b}</p>
      {callbackEjecutado && <p>El callback se ha ejecutado</p>}
    </div>
  );
};

// Componente que utiliza useMemo
/**
 * El hook useMemo se utiliza para memorizar valores en React. Es una alternativa al hook useCallback que permite memorizar funciones.
 * En este ejemplo, se utiliza el hook useMemo para memorizar el valor de la suma de los estados a y b. El valor de la suma se memoriza para que no se vuelva a calcular cada vez que el estado a o el estado b cambien.
 * El hook useMemo recibe dos argumentos: una función y un array de dependencias. La función es la función que se va a memorizar. El array de dependencias es un array de valores que se utilizan dentro de la función. Si alguno de los valores del array de dependencias cambia, la función se vuelve a crear.
 * El hook useMemo devuelve el valor memorizado.
 */

const EjemploUseMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log("Ejecutando el useMemo");
    return a + b;
  }, [a, b]);

  const incrementarA = () => {
    setA(a + 1);
  };

  const incrementarB = () => {
    setB(b + 1);
  };

  return (
    <div>
      <h2>Ejemplo UseMemo</h2>
      <p>El valor de A es: {a}</p>
      <p>El valor de B es: {b}</p>
      <p>El valor de A + B es: {memoizedValue}</p>
      <button onClick={incrementarA}>Incrementar A</button>
      <button onClick={incrementarB}>Incrementar B</button>
    </div>
  );
};

// Componente que utiliza useRef
/**
 * El hook useRef se utiliza para crear una referencia mutable en React. Una referencia mutable es un objeto que se puede utilizar para almacenar valores mutables.
 * En este ejemplo, se utiliza el hook useRef para crear una referencia mutable llamada refContainer. La referencia mutable se utiliza para almacenar un elemento HTML.
 * El hook useRef devuelve un objeto con una propiedad current que se puede utilizar para acceder al valor de la referencia mutable.
 * En este ejemplo, se utiliza la referencia mutable para mostrar el valor del estado contador en un párrafo.
 * El hook useRef también se puede utilizar para almacenar valores mutables que no están relacionados con elementos HTML.
 */

const EjemploUseRef = () => {
  const [contador, setContador] = useState(0);
  const refContainer = useRef(null);

  const incrementarContador = () => {
    setContador(contador + 1);
    refContainer.current.style.color = contador >= 5 ? "red" : "black";
  };

  return (
    <div>
      <h2>Ejemplo UseRef</h2>
      <p ref={refContainer}>El contador es: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

// Componente que utiliza useImperativeHandle
/**
 * El hook useImperativeHandle se utiliza para personalizar el valor que se expone a los componentes padres cuando se utiliza el atributo ref en un componente de React.
 * En este ejemplo, se utiliza el hook useImperativeHandle para personalizar el valor que se expone al componente padre cuando se utiliza el atributo ref en el componente ReproductorVideo.
 * El componente ReproductorVideo utiliza el hook useImperativeHandle para personalizar el valor que se expone al componente padre cuando se utiliza el atributo ref en el componente ReproductorVideo. El valor personalizado es un objeto con tres funciones: reproducir, pausar y rebobinar.
 * El componente EjemploUseImperativeHandle utiliza el atributo ref en el componente ReproductorVideo para acceder al valor personalizado que se expone al componente padre.
 * El componente EjemploUseImperativeHandle utiliza las funciones reproducir, pausar y rebobinar para reproducir, pausar y rebobinar el vídeo.
 */

const ReproductorVideo = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    reproducir: () => {
      videoRef.current.play();
    },
    pausar: () => {
      videoRef.current.pause();
    },
    rebobinar: () => {
      videoRef.current.currentTime = 0;
    },
  }));

  return (
    <div>
      <video ref={videoRef} width="640" height="360" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
});

const EjemploUseImperativeHandle = () => {
  const reproductorRef = useRef(null);

  const reproducir = () => {
    reproductorRef.current.reproducir();
  };

  const pausar = () => {
    reproductorRef.current.pausar();
  };

  const rebobinar = () => {
    reproductorRef.current.rebobinar();
  };

  return (
    <div>
      <h2>Ejemplo UseImperativeHandle</h2>
      <ReproductorVideo ref={reproductorRef} />
      <button onClick={reproducir}>Reproducir</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={rebobinar}>Rebobinar</button>
    </div>
  );
};

export {
  Contador,
  EjemploUseEffect,
  EjemploUseContext,
  EjemploUseReducer,
  EjemploUseCallback,
  EjemploUseMemo,
  EjemploUseRef,
  EjemploUseImperativeHandle,
};
