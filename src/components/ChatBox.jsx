import React, { useState, useRef, useEffect } from 'react';
import { topics } from '../data/topics';
import { responses } from '../data/responses';

function findMatchedTopic(input) {
  input = input.toLowerCase().trim();
  const words = input.split(/\W+/);

  for (const topicObj of topics) {
    const multiWordMatched = topicObj.keywords.some(k => k.includes(' ') && input.includes(k));
    if (multiWordMatched) return topicObj.topic;

    const singleWordMatched = topicObj.keywords.some(k => !k.includes(' ') && words.includes(k));
    if (singleWordMatched) return topicObj.topic;
  }
  return 'default';
}

const ChatBox = () => {
  const [messages, setMessages] = useState([{ sender: '🤖 ', text: ' Ask a question to get started..' }]);
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  const [typingText, setTypingText] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    let typingInterval;
    if (typingText) {
      let dots = 0;
      typingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        const dotStr = '.'.repeat(dots);
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { sender: '🤖Reply ', text: `Typing${dotStr}` };
          return updated;
        });
      }, 500);
    }

    return () => clearInterval(typingInterval);
  }, [typingText]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: '🧑You ', text: input };
    const topic = findMatchedTopic(input);
    const replyList = responses[topic] || responses['default'];
    const botReplyText = replyList[Math.floor(Math.random() * replyList.length)];

    setMessages(prev => [...prev, userMsg, { sender: '🤖Reply ', text: 'Typing' }]);
    setInput('');
    setTypingText('Typing');

    setTimeout(() => {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: '🤖Reply ', text: botReplyText };
        return updated;
      });
      setTypingText('');
    }, 5000);
  };

  return (
    <>
      {!show && (
        <img
          src="https://img.freepik.com/premium-vector/chat-bot-logo-smiling-virtual-assistant-bot-smiles-icon-logo-robot-head-with-headphones_843540-91.jpg"
          alt="Chat Icon"
          className="chat-icon"
          onClick={() => setShow(true)}
        />
      )}

      {show && (
        <div className="chatbox">
          <header>
            <span><b>@ ChatBot Help</b></span>
            <button onClick={() => setShow(false)} style={{ float: 'right', background: 'transparent', border: 'none', color: '#fff' }}>✖</button>
          </header>
          <div className="chatlog">
            {messages.map((msg, idx) => (
              <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="user-input">
            <input
              placeholder="Ask about DSA in Java.."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;