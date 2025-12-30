import React, { useEffect } from 'react';
import { XIcon } from 'lucide-react';
import { useChatStore } from '../store/useChatStore';

function ChatHeader() {
  const {selectedUser, setSelectedUser} = useChatStore();
  useEffect(() => {
    const handleEscKey = (event) => {
        if (event.key === "Escape") setSelectedUser(null);
    }
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser])
  return (
    <div className='flex justify-between items-center bg-amber-800/25 border-b border-amber-900/20 max-h-[84px] px-6 py-4 flex-1'>
        <div className='flex items-center space-x-3'>
            <div className='avatar online'>
                <div className='w-12 rounded-full ring ring-success ring-offset-2'>
                    <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName}/>
                </div>
            </div>
            <div>
                <h3 className='text-amber-50 font-medium mx-w-[280px]'>{selectedUser.fullName}</h3>
                <p className='text-slate-400'>Online</p>
            </div>
        </div>
        <button onClick={() => setSelectedUser(null)}>
            <XIcon className="w-5 h-5 text-amber-500 hover:text-amber-300 transition-colors cursor-pointer"/>
        </button>
    </div>
  )
}

export default ChatHeader