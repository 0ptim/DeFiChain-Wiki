import React, { useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

function QA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (!question) {
      setError(true);
      return;
    }

    setLoading(true);
    setAnswer("");
    try {
      const response = await fetch("https://chatdefichain.fly.dev/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.response.response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="transition-color mapBackground py-16 flex justify-center items-center bg-center bg-cover bg-no-repeat md:py-28">
      <div className="relative flex flex-col items-center shadow-2xl max-w-2xl grow rounded-3xl p-6 bg-white dark:bg-backgroundDark md:p-10">
        <h1>
          <Translate>JellyChat.Title</Translate>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-200">
          <Translate>JellyChat.Instruction</Translate>
        </p>
        <div className="w-full relative">
          <input
            className={`w-full outline-none text-xl p-5 rounded-lg shadow-md border border-transparent bg-elementLight hover:border-main-300 focus:border-main-700 dark:bg-elementDark  dark:hover:border-main-700 dark:focus:border-main-500 ${
              error ? "bg-main-100 dark:bg-main-900" : ""
            }`}
            type="text"
            placeholder={translate({ message: "JellyChat.Placeholder" })}
            value={question}
            ref={inputRef}
            onChange={(e) => {
              setQuestion(e.target.value);
              setError(false);
            }}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            {question && (
              <button
                className="bg-gray-50 dark:bg-gray-500 border-0 rounded-full w-6 h-6 font-bold text-gray-600 dark:text-gray-800 text-xs cursor-pointer"
                onClick={() => {
                  setQuestion("");
                  inputRef.current.focus();
                }}
              >
                X
              </button>
            )}
          </div>
        </div>
        <button
          className="sendButton w-full outline-none border-none text-lg p-4 rounded-lg text-white cursor-pointer my-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          <Translate>JellyChat.Button</Translate>
        </button>
        <div className="w-full border-0 outline-none p-5 h-48 rounded-lg shadow-md overflow-auto bg-elementLight dark:bg-elementDark">
          {!loading && <p className="text-lg">{answer}</p>}
          {loading && (
            <div>
              <div className="w-64 h-4 animate-pulse mb-2 rounded-md bg-gray-700"></div>
              <div className="w-40 h-4 animate-pulse mb-2 rounded-md bg-gray-700"></div>
              <div className="w-48 h-4 animate-pulse mb-2 rounded-md bg-gray-700"></div>
            </div>
          )}
        </div>
        <div className="jellyChatBeta absolute h-32 w-32 top-0 left-0 drop-shadow-md"></div>
        <Link
          className="absolute top-5 right-5 shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-pointer font-bold bg-elementLight dark:bg-elementDark"
          to="/docs/auto/JellyChat"
        >
          ?
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout description="Ask questions about DeFiChain which will get answered.">
      <QA />
    </Layout>
  );
}