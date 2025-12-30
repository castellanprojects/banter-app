import { MessageCircleIcon, SignalIcon, TextSelectIcon, TypeIcon, UserPlusIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
        <TextSelectIcon className="size-10 text-amber-400" />
      </div>
      <h3 className="text-xl font-semibold text-amber-100/90 mb-2">Select A Chat</h3>
      <p className="text-amber-100/70 max-w-md">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;