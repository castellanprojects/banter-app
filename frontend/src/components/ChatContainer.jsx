import { useEffect, useRef } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {selectedUser, getMessagesByUserId, messages, isMessagesLoading} = useChatStore();
  const {authUser} = useAuthStore();
  const messageEndRef = useRef(null);
  useEffect(() => {
    if (selectedUser && selectedUser._id) {
      getMessagesByUserId(selectedUser._id);
    }
  }, [selectedUser, getMessagesByUserId]);
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <>
      <ChatHeader/>
      <div className='flex-1 px-6 overflow-y-auto py-4'>
        {messages.length > 0 && !isMessagesLoading ? (
          <div className='max-w-3xl mx-auto'>
            {messages.map((msg) => (
              <div key={msg._id} className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}>
                <div className={`chat-bubble rounded-2xl relative ${msg.senderId === authUser._id ? "bg-amber-500 text-white" : "bg-amber-600/90"}`}>
                  {msg.image && (
                    <img src={msg.image} alt="Shared Multimedia" className='rounded-lg h-48 object-cover my-2' />
                  )}
                  {msg.text && <p className='font-normal'>{msg.text}</p>}
                  <p className={`text-xs text-amber-50 opacity-80 flex items-center ${msg.senderId === authUser._id ? "float-end" : "float-start" } gap-1`}>
                    {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messageEndRef}/>
          </div>
        ) : isMessagesLoading ? <MessagesLoadingSkeleton/> : (
          <NoChatHistoryPlaceholder name={selectedUser?.fullName || ""} />
        )}
      </div>
      <MessageInput/>
    </>
  )
}

export default ChatContainer