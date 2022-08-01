import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

const App = () => {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.imageUrl}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {cards}
      {cards}
    </div>
  );
};

export default App;
