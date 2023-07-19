import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IConversationIdContext {
  conversationId: string | null;
  setConversationId: Dispatch<SetStateAction<string | null>>;
  friendName: string | null;
  setFriendName: Dispatch<SetStateAction<string | null>>;
}

const ConversationIdContext = createContext<IConversationIdContext | null>(
  null
);

export const useConversationIdContext = (): IConversationIdContext | null => {
  return useContext(ConversationIdContext);
};

const ConversationIdProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [conversationId, setConversationId] = useState<null | string>(null);
  const [friendName, setFriendName] = useState<string | null>(null);

  return (
    <ConversationIdContext.Provider
      value={{ conversationId, setConversationId, friendName, setFriendName }}
    >
      {children}
    </ConversationIdContext.Provider>
  );
};

export default ConversationIdProvider;
