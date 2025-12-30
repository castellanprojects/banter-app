import { MessageCircleIcon, PersonStandingIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center">
        <PersonStandingIcon className="w-8 h-8 text-amber-400" />
      </div>
      <div>
        <h4 className="text-amber-100/90 font-medium mb-1">Your Counter Is Empty!</h4>
        <p className="text-amber-400 text-sm px-6">It's time to clink pints with others!</p>
        <p className="text-amber-400 text-sm px-6">Add someone via a Friendship Token!</p>
      </div>
      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm text-amber-400 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 transition-colors">Add A Friend</button>
    </div>
  );
}
export default NoChatsFound;