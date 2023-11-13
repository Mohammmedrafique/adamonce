// import { useState, useEffect } from "react";
// import "./Chatpage.css";

// function ChatApp() {
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendMessage(message);
//   };

//   return (
//     <main>
//       <h1>Welcome to AI virtual Interview</h1>

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

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="message"
//           value={message}
//           placeholder="Type a message here and hit Enter..."
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//         <button type="button" onClick={startSpeechRecognition}>
//           🎤
//         </button>
//       </form>
//     </main>
//   );
// }

// export default ChatApp;
// Import the necessary React and CSS modules
// Import the necessary React and CSS modules

import { useState, useEffect, useRef } from "react";

function Chatpage() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        sendMessage(transcript);
      };

      setRecognition(recognition);
    } else {
      console.error("SpeechRecognition is not supported in this browser");
    }
  }, []);

  useEffect(() => {
    // Scroll to the bottom when chat updates
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chats]);

  const sendMessage = (msg, role = "user") => {
    setIsTyping(true);

    let msgs = [...chats];
    msgs.push({ role, content: msg });
    setChats(msgs);

    setMessage("");

    if (role === "user") {
      fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chats,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          msgs.push({ role: "ai", content: data.output });
          setChats(msgs);
          setIsTyping(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const startSpeechRecognition = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
  };

  return (
    <main className="max-w-screen-md mx-auto p-6 flex flex-col h-screen">
      <h1 className="text-center font-extrabold text-2xl">
        Welcome AI virtual Interview
      </h1>
      <section
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto mb-4"
        style={{ maxHeight: "calc(100% - 60px)" }} // Adjusted height for the chat container
      >
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`text-white p-2 rounded-lg mb-2 ${
              chat.role === "user" ? "bg-blue-500 ml-auto" : "bg-green-500"
            }`}
          >
            <span className="font-bold uppercase">{chat.role}</span>
            <span className="mx-2">:</span>
            <span>{chat.content}</span>
          </div>
        ))}
      </section>

      <div className={`mb-4 ${isTyping ? "" : "hidden"}`}>
        <p>
          <i>{isTyping ? "Typing..." : ""}</i>
        </p>
      </div>

      <section>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            name="message"
            value={message}
            placeholder="Type a message here and hit Enter..."
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow border border-gray-300 p-2 rounded-l focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={startSpeechRecognition}
            className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600 focus:outline-none"
          >
            🎤
          </button>
        </form>
      </section>
    </main>
  );
}

export default Chatpage;
