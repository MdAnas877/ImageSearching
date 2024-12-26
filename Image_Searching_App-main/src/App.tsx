import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Saved from "./component/Saved";
import { Image } from "./type";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [search, setSearch] = useState<string>("nature");
  const [loader, setLoader] = useState<boolean>(true);
  const [saved, setSaved] = useState<Image[]>([]);

  const API_KEY = "32RbjC9489RT7tkziFOgH7wbZStsOVRHrO5zPRQJIDuhrndl03Opu1DE";

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`, {
        headers: {
          Authorization: `${API_KEY}`,
        },
      })
      .then((res) => {
        setLoader(false);
        setImages(res.data.photos);
      })
      .catch((error) => {
        console.error("Error fetching images", error);
        setLoader(false);
      });

    const data = localStorage.getItem("Images");
    if (data) {
      setSaved(JSON.parse(data));
    }
  }, [search]);

  useEffect(() => {
    if (saved.length !== 0) {
      const json = JSON.stringify(saved);
      localStorage.setItem("Images", json);
    }
  }, [saved]);

  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              images={images}
              loader={loader}
              saved={saved}
              setSaved={setSaved}
            />
          }
        />
        <Route
          path="/saved"
          element={<Saved saved={saved} loader={loader} />}
        />
      </Routes>
    </Router>
  );
};

export default App;