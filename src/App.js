import "./App.css";
import Giphy from "./components/Giphy";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import MyContext from "./MyContext";
import SingleGif from "./components/SingleGif";
import { useImmerReducer } from "use-immer";

function App() {
  const initialState = {
    data: [],
    isLoading: false,
  };

  const ourReducer = (state, action) => {
    //eslint-disable-next-line
    switch (action.type) {
      case "updateData":
        state.data = action.value;
        break;
      case "setLoader":
        state.isLoading = action.value;
        break;
    }
  };

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Giphy />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/gif/:name" element={<SingleGif />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
