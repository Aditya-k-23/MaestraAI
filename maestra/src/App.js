import './App.css';
// import fetch from "node-fetch";


const App = () => {

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <section className="side-bar">
        <button onClick={getMessages}>+ New Chat </button>
        <nav>
          <p>MaestraAI</p>
        </nav>
      </section>
      <section className="main"></section>
    </div>
  );
}

export default App;
