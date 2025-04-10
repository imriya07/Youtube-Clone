import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import store from "../Utils/store";
import { generateRandomname, makeRandomMessage } from "../Utils/helper";
import { CHART_LENGTH } from "../Utils/helper";

const LiveChat = () => {
  const [liveComments, setLiveComments] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    let i = setInterval(() => {
      //Api polling
      dispatch(
        addMessage({
          name: generateRandomname(),
          message: makeRandomMessage(CHART_LENGTH) + " ✈️",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg  overflow-scroll flex flex-col-reverse ">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full p-2 ml-2 border border-black "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ashish Raj",
              message: liveComments,
            })
          );
          setLiveComments("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveComments}
          onChange={(e) => {
            setLiveComments(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-400 rounded-sm">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
