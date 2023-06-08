import "./App.css";
import Muffin from "./Muffin";

function App() {
  return (
    <div className="body">
      <Muffin name="Blueberry Muffin" stock={50} today={0} image="https://bromabakery.com/wp-content/uploads/2020/03/Blueberry-Muffins-2.jpg"/>
      <Muffin name="choclate chip cookies" stock={100} today={0} image="https://cdn.loveandlemons.com/wp-content/uploads/2020/02/vegan-chocolate-chip-cookies.jpg"/>
    </div>
  );
}

export default App;
