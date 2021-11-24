import "./App.css";
import Aya from "./tsawer/aya1.jpg";
import Component from "./profile/Component";
function App() {
  return (
    <div className="App">
      <Component
        name="Aya Benaissa "
        diplome="bachelor's degree in Science  "
        profession="full stack developer"
      >
        <img
          src={Aya}
          alt="this is my face"
          style={{
            margin: "0 auto",
            display: "block",
            height: "300px",
            borderRadius: "60%",
          }}
        />
      </Component>
    </div>
  );
}

export default App;
