import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import { DefaultLayout } from "../layout/default";
import Details from "../pages/details/Details";
import About from "../pages/about/About";
import Form from "../pages/form/Form";

export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
}
