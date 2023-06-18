import { createContext, useContext, useMemo, useState } from "react";

interface HomeModalsContext {
  messenger: {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
  noti: {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
  menu: {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
  account: {
    isOpen: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
  addPost: {
    isOpen: boolean;
    disabledHide: boolean;
    show: () => void;
    hide: () => void;
    toggle: () => void;
  };
  toggleConversationModal: (userId: string, friendId: string) => void;
  hideAll: () => void;
  hideOthers: (modalName: ModalName) => void;
}

type ModalName = "messenger" | "noti" | "menu" | "account" | "addPost";

const HomeModalsContext = createContext<HomeModalsContext | null>(null);

export const useHomeModalsContext = () => {
  return useContext(HomeModalsContext);
};

const HomeModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    messenger: false,
    noti: false,
    menu: false,
    account: false,
    addPost: false,
  });

  const homeModalsContext = useMemo((): HomeModalsContext => {
    return {
      messenger: {
        isOpen: isModalOpen.messenger,
        show: () => setIsModalOpen((prev) => ({ ...prev, messenger: true })),
        hide: () => setIsModalOpen((prev) => ({ ...prev, messenger: false })),
        toggle: () =>
          setIsModalOpen((prev) => ({ ...prev, messenger: !prev.messenger })),
      },
      noti: {
        isOpen: isModalOpen.noti,
        show: () => setIsModalOpen((prev) => ({ ...prev, noti: true })),
        hide: () => setIsModalOpen((prev) => ({ ...prev, noti: false })),
        toggle: () => setIsModalOpen((prev) => ({ ...prev, noti: !prev.noti })),
      },
      menu: {
        isOpen: isModalOpen.menu,
        show: () => setIsModalOpen((prev) => ({ ...prev, menu: true })),
        hide: () => setIsModalOpen((prev) => ({ ...prev, menu: false })),
        toggle: () => setIsModalOpen((prev) => ({ ...prev, menu: !prev.menu })),
      },
      account: {
        isOpen: isModalOpen.account,
        show: () => setIsModalOpen((prev) => ({ ...prev, account: true })),
        hide: () => setIsModalOpen((prev) => ({ ...prev, account: false })),
        toggle: () =>
          setIsModalOpen((prev) => ({ ...prev, account: !prev.account })),
      },
      addPost: {
        isOpen: isModalOpen.addPost,
        disabledHide: false,
        show: () => setIsModalOpen((prev) => ({ ...prev, addPost: true })),
        hide() {
          if (!this.disabledHide) {
            setIsModalOpen((prev) => ({ ...prev, addPost: false }));
          }
        },
        toggle() {
          if (!this.disabledHide) {
            setIsModalOpen((prev) => ({ ...prev, addPost: !prev.addPost }));
          }
        },
      },
      toggleConversationModal: async (userId, friendId) => {
        const modal = document.getElementById(userId + friendId);
        const conversationModalWrapper = document.getElementById(
          "conversationModalWrapper"
        );
        const visibleModal = document.querySelector(".visibleConversation");
        const visibleMessagesWrapper = document.getElementById(
          `messages${userId}${friendId}`
        );

        if (visibleModal === modal) {
          visibleModal?.classList.remove("visibleConversation");
          if (conversationModalWrapper)
            conversationModalWrapper.style.zIndex = "0";
        } else if (visibleModal !== modal) {
          visibleModal?.classList.remove("visibleConversation");
          modal?.classList.add("visibleConversation");
          if (conversationModalWrapper)
            conversationModalWrapper.style.zIndex = "100";
          if (visibleMessagesWrapper)
            visibleMessagesWrapper.scrollTop =
              visibleMessagesWrapper.scrollHeight;
        } else {
          modal?.classList.add("visibleConversation");
          if (conversationModalWrapper)
            conversationModalWrapper.style.zIndex = "100";
          if (visibleMessagesWrapper)
            visibleMessagesWrapper.scrollTop =
              visibleMessagesWrapper.scrollHeight;
        }
      },
      hideAll: () =>
        setIsModalOpen((prev) => ({
          ...prev,
          messenger: false,
          menu: false,
          noti: false,
          account: false,
          addPost: false,
        })),
      hideOthers: (modalName: ModalName) =>
        setIsModalOpen((prev) => ({
          ...prev,
          messenger: false,
          menu: false,
          noti: false,
          account: false,
          addPost: false,
          [modalName]: prev[modalName],
        })),
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <HomeModalsContext.Provider value={homeModalsContext}>
      {children}
    </HomeModalsContext.Provider>
  );
};

export default HomeModalsProvider;
