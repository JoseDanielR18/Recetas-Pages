import { useNavigate } from "react-router-dom";
import { useUser } from "./hooks/UseUser";
import axios from "axios";
import { useEffect, useState } from "react";
import { Recetas } from "./views/Recetas";

function App() {
  const navigation = useNavigate();
  const { setIsLogin } = useUser();

  const [recetas, setRecetas] = useState([]);
  const [buscador, setBuscador] = useState("");

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    obtenerRecetas();
  }, []);


  const obtenerRecetas = async () => {
    try {
      setIsloading(true);
      const { data } = await axios.get("http://localhost:8080/recipe");
      setRecetas(data.data);
      setIsloading(false);
    } catch (error) {
      setIsloading(false)
      console.log("Error al obtener la receta", error.message);
    }
  };

  const ejecutarForm = (e) => {
    e.preventDefault();
  }

  const filtros = recetas.filter(item =>
    item.title.toLowerCase() === buscador.toLowerCase() ||
    new RegExp(`\\b${buscador.toLowerCase()}\\b`).test(item.instructions.toLowerCase())
  );


  const salir = () => {
    setIsLogin(true);
    navigation("/");
    localStorage.setItem("login", false);
  };

  return (
    <Recetas
      salir={salir}
      filtros={filtros}
      ejecutarForm={ejecutarForm}
      obtenerRecetas={obtenerRecetas}
      setBuscador={setBuscador}
      isLoading={isLoading} 
      recetas={recetas}/>
  )
}

export default App
