import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [Error, setError] = useState(false);

  useEffect(() => {
    fetch("/data/data.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000);
      })
      .catch((error) => {
        console.log[("error", Error)];
        setCargando(false);
        setError(true);
      });
  }, []);

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: product.cantidad }]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item !== null);
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              agregarCarrito={handleAddToCart}
              eliminarDelCarrito={handleDeleteFromCart}
              cart={cart}
              productos={productos}
              cargando={cargando}
            />
          }
        />

        <Route path="/acercade" element={<AcercaDe cart={cart} />} />

        <Route
          path="/galeriadeproductos"
          element={
            <GaleriaDeProductos
              agregarCarrito={handleAddToCart}
              eliminarDelCarrito={handleDeleteFromCart}
              cart={cart}
              productos={productos}
              cargando={cargando}
            />
          }
        />

        <Route path="/contacto" element={<Contacto cart={cart} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
