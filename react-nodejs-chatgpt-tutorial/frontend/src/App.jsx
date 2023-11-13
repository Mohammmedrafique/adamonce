// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [chats, setChats] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);

//   const chat = async (e, message) => {
//     e.preventDefault();

//     if (!message) return;
//     setIsTyping(true);
//     scrollTo(0, 1e10);

//     let msgs = chats;
//     msgs.push({ role: "user", content: message });
//     setChats(msgs);

//     setMessage("");

//     fetch("http://localhost:8000/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chats,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         msgs.push(data.output);
//         setChats(msgs);
//         setIsTyping(false);
//         scrollTo(0, 1e10);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <main>
//       <h1>FullStack Chat AI Tutorial</h1>

//       <section>
//         {chats && chats.length
//           ? chats.map((chat, index) => (
//               <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
//                 <span>
//                   <b>{chat.role.toUpperCase()}</b>
//                 </span>
//                 <span>:</span>
//                 <span>{chat.content}</span>
//               </p>
//             ))
//           : ""}
//       </section>

//       <div className={isTyping ? "" : "hide"}>
//         <p>
//           <i>{isTyping ? "Typing" : ""}</i>
//         </p>
//       </div>

//       <form action="" onSubmit={(e) => chat(e, message)}>
//         <input
//           type="text"
//           name="message"
//           value={message}
//           placeholder="Type a message here and hit Enter..."
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </form>
//     </main>
//   );
// }

// export default App;

//voice is working fine
// import { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [chats, setChats] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [recognition, setRecognition] = useState(null);

//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (SpeechRecognition) {
//       const recognition = new SpeechRecognition();
//       recognition.continuous = false;
//       recognition.interimResults = false;

//       recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         setMessage(transcript);
//         sendMessage(transcript);
//       };

//       setRecognition(recognition);
//     } else {
//       console.error("SpeechRecognition is not supported in this browser");
//     }
//   }, []);

//   const sendMessage = (msg) => {
//     setIsTyping(true);
//     scrollTo(0, 1e10);

//     let msgs = chats;
//     msgs.push({ role: "user", content: msg });
//     setChats(msgs);

//     setMessage("");

//     fetch("http://localhost:8000/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         chats,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         msgs.push(data.output);
//         setChats(msgs);
//         setIsTyping(false);
//         scrollTo(0, 1e10);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const startSpeechRecognition = () => {
//     if (recognition) {
//       recognition.start();
//     }
//   };

//   return (
//     <main>
//       <h1>FullStack Chat AI Tutorial</h1>

//       <section>
//         {chats && chats.length
//           ? chats.map((chat, index) => (
//               <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
//                 <span>
//                   <b>{chat.role.toUpperCase()}</b>
//                 </span>
//                 <span>:</span>
//                 <span>{chat.content}</span>
//               </p>
//             ))
//           : ""}
//       </section>

//       <div className={isTyping ? "" : "hide"}>
//         <p>
//           <i>{isTyping ? "Typing" : ""}</i>
//         </p>
//       </div>

//       <form action="" onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           name="message"
//           value={message}
//           placeholder="Type a message here and hit Enter..."
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="button" onClick={startSpeechRecognition}>
//           🎤
//         </button>
//       </form>
//     </main>
//   );
// }

// export default App;

///code is workinfine but not scrolling

// import ChatApp from "./Components/Chatpage";
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
    <div>
      {/* <ChatApp /> */}
      <Dashboard />
    </div>
  );
};

export default App;
