import React, { useState, useRef, useEffect } from 'react';

const TypingText = ({ text, onFinish }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (onFinish) onFinish();
      }
    }, 25);
    return () => clearInterval(interval);
  }, [text, onFinish]);

  return <span>{displayedText}</span>;
};

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      text: "🐾 Hi! I’m Vet Assistance, your friendly AI assistant for pet care. I can share tips, training advice, and general info. (But always see a vet for medical issues!)",
      isBot: true,
      citations: []
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsLoading(true);

    await getBotResponse(userMessage);
    setIsLoading(false);
  };

  const getBotResponse = async (userMessage) => {
    const prompt = `You are Vet Assistance, a helpful pet care assistant. 
Answer clearly with tips and general knowledge. 
DO NOT give diagnoses or prescriptions. 
Always recommend consulting a vet for health issues. 
User: ${userMessage}`;

    const apiKey = "AIzaSyCa2RtFmxNQByWcgk8Wn3PppML57Hj7Ihk";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      prompt: [
        { text: prompt }
      ]
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.[0]?.text ||
        "Sorry, I couldn’t generate a response. 🐕 Try again!";

      setMessages(prev => [...prev, { text, isBot: true, citations: [] }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { text: "⚠️ Connection error. Please try again later.", isBot: true }]);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl h-[90vh] flex flex-col rounded-3xl shadow-xl overflow-hidden bg-white">
        <header className="bg-amber-600 text-white p-5 text-2xl font-bold flex justify-center">
          🐾 Vet Assistant
        </header>

        <main className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`p-4 rounded-xl max-w-[80%] shadow-md transition-all duration-300 ${msg.isBot ? 'bg-gray-100 text-gray-800 rounded-bl-none' : 'bg-emerald-500 text-white rounded-br-none'}`}>
                <div className="leading-relaxed">
                  {msg.isBot ? (index === messages.length - 1 ? <TypingText text={msg.text} /> : msg.text) : msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 p-3 rounded-xl">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-3 h-3 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </main>

        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pet care, food, training..."
              disabled={isLoading}
              className="flex-1 p-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors disabled:bg-gray-400"
            >
              ➤
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
