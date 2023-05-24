import SimpleInput from "./components/SimpleInput";

function App() {
  async function callinformation(enfo) {
    const response = await fetch(
      "https://react-5a74f-default-rtdb.firebaseio.com/form.json",
      {
        method: "POST",
        body: JSON.stringify(enfo),
      }
    );
  }

  return (
    <div className="app">
      <SimpleInput data={callinformation} />
    </div>
  );
}

export default App;
