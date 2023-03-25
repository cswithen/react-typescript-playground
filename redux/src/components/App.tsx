import { Provider } from "react-redux";
import { store } from "../state";
import RepositoresList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoresList />
      </div>
    </Provider>
  );
}

export default App;
