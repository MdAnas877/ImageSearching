import React, { ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  setSearch: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Input changed:", e.target.value); // Debug log
    setSearch(e.target.value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Dropdown changed:", e.target.value); // Debug log
    setSearch(e.target.value);
    navigate("/");
  };

  return (
    <>
      <div className="nav mt-3">
        <div className="button btn btn-outline-warning mx-3" onClick={() => {
          setSearch("nature");
          navigate("/");
        }}>Nature</div>
        <div className="button btn btn-outline-primary mx-3" onClick={() => {
          setSearch("travel");
          navigate("/");
        }}>Travel</div>
        <div className="button btn btn-outline-info mx-3" onClick={() => {
          setSearch("city");
          navigate("/");
        }}>City</div>
        <div className="button btn btn-outline-secondary mx-3" onClick={() => {
          setSearch("car");
          navigate("/");
        }}>Car</div>
        <div className="button btn btn-outline-warning mx-3" onClick={() => {
          setSearch("fashion");
          navigate("/");
        }}>Fashion</div>
        <div className="button btn btn-outline-light mx-3" onClick={() => {
          setSearch("animals");
          navigate("/");
        }}>Animals</div>
        <div className="button btn btn-outline-dark text-light mx-3" onClick={() => {
          setSearch("technology");
          navigate("/");
        }}>Technology</div>
        <div className="button btn btn-outline-warning mx-3" onClick={() => {
          setSearch("finance");
          navigate("/");
        }}>Business & Finance</div>
        <div className="button btn btn-outline-primary mx-3" onClick={() => {
          setSearch("tokyo");
          navigate("/");
        }}>Tokyo</div>
        <div className="button btn btn-outline-info mx-3" onClick={() => {
          setSearch("dubai");
          navigate("/");
        }}>Dubai</div>

        {location.pathname === "/saved" ? (
          <div className="button btn btn-warning mx-3" onClick={() => navigate("/")}>Home</div>
        ) : (
          <div className="button btn btn-warning mx-3" onClick={() => navigate("/saved")}>Saved</div>
        )}
      </div>

      <div className="dropdown my-3">
        <select onChange={handleDropdownChange} className="form-control">
          <option value="nature">Nature</option>
          <option value="travel">Travel</option>
          <option value="city">City</option>
          <option value="car">Car</option>
          <option value="fashion">Fashion</option>
          <option value="animals">Animals</option>
          <option value="technology">Technology</option>
          <option value="finance">Business & Finance</option>
          <option value="tokyo">Tokyo</option>
          <option value="dubai">Dubai</option>
        </select>
      </div>

      <div className="container my-4 search">
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleInputChange}
              placeholder="Search Here ...."
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
