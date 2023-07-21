import { useContext, useState } from "react";
import { FaSearch, FaCrosshairs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./SearchInput.module.css";
import { ContextGlobal } from "../../utils/global.context";

const SearchInput = () => {
  const { state } = useContext(ContextGlobal);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const getLocationHandler = () => {
    // setSearchInput("");
    // setAddressList([]);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          navigate(`/location?lat=${latitude}&lon=${longitude}`);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className={`${styles.searchInput} ${styles[state.themeMode]}`}>
      <form onSubmit={submitHandler}>
        <label htmlFor="searchInput">
          <button type="submit">
            <FaSearch />
          </button>
          <input
            id="searchInput"
            type="search"
            placeholder="Buscar Lugares"
            value={input}
            onChange={inputChangeHandler}
            list="searchMatch"
            autoComplete="false"
          />
          <button onClick={getLocationHandler}>
            <FaCrosshairs />
          </button>
          {/* <datalist id="searchMatch">
            <option value="comomo">
              <li>comomo</li>
            </option>
            <option value="fsd"></option>
            <option value="fsd"></option>
          </datalist> */}
        </label>
      </form>
    </div>
  );
};

export default SearchInput;
