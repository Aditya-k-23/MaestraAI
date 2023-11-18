import './App.css';
import AudioComponent from './audio';
import ChatComponent from './chat';
// import fetch from "node-fetch";


const App = () => {

  // const getMessages = async () => {
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       message: "how are you?"
  //     }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  //   try {
  //     const response = await fetch('http://localhost:8000/completions', options)
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New Chat </button>
        <nav>
          <p>MaestraAI</p>
        </nav>
      </section>
      <section className="main"></section>
      <AudioComponent></AudioComponent>
      <ChatComponent></ChatComponent>
    </div>
  );
}

export default App;
