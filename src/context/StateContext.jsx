import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRegion, setFilterRegion] = useState([]);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_COUNTRIES", payload: country });
    const searchCountry = country.filter((el) =>
      el.name.common.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_COUNTRIES", payload: searchCountry });
    // const filterByRegion = country.filter( el => el.region == country.region)
    // dispatch({type: "GET_COUNTRIES", payload: filterRegion})
    // dispatch({type: "GET_REGION", payload: country})
  }, [country, search]);

  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    setCountry(data);
    // console.log(data)
  };

  const initialState = { countryLists: [], region: [], detail: [] };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    dispatch,
    search,
    setSearch,
    filterRegion,
    setFilterRegion,
    mode,
    setMode,
  };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
