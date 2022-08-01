import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";

import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="flex flex-nowrap gap-4 overflow-x-auto my-10 ml-12  ">
        {cards}
      </section>
    </div>
  );
}

export default App;
