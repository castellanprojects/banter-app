import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
    const { activeTab, setActiveTab } = useChatStore();
    return (
        <div className="tabs tabs-boxed bg-transparent p-2 m-2">
            <button onClick={() => setActiveTab("chats")} className={`tab ${activeTab === "chats" ? "bg-amber-500/20 text-amber-300" : "text-amber-100/60"}`}>Chats</button>
            <button onClick={() => setActiveTab("contacts")} className={`tab ${activeTab === "contacts" ? "bg-amber-500/20 text-amber-300" : "text-amber-100/60"}`}>Friends</button>
        </div>
    )
}

export default ActiveTabSwitch