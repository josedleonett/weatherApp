import { useState } from "react";
import { FaSearch, FaCrosshairs } from "react-icons/fa";

const Searchbar = () => {
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="searchInput">
          <FaSearch/>
          <input
            id="searhInput"
            type="search"
            placeholder="Buscar Lugares"
            value={input}
            onChange={inputChangeHandler}
          />
          <FaCrosshairs/>
        </label>
      </form>
    </div>
  );
};

export default Searchbar;
