import { useState, useEffect } from "react";
import "../App.css";

function ChatApp() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [recognition, setRecognition] = useState(null);

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

  const sendMessage = (msg) => {
    setIsTyping(true);
    scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: "user", content: msg });
    setChats(msgs);

    setMessage("");

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
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
        scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <main>
      <h1>Welcome to AI virtual Interview</h1>

      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={startSpeechRecognition}>
          🎤
        </button>
      </form>
    </main>
  );
}

export default ChatApp;
