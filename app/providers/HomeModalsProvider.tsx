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
  hideAll: () => void;
  hideOthers: (modalName: ModalName) => void;
}

type ModalName = "messenger" | "noti" | "menu";

const HomeModalsContext = createContext<HomeModalsContext | null>(null);

export const useHomeModalsContext = () => {
  return useContext(HomeModalsContext);
};

const HomeModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState({
    messenger: false,
    noti: false,
    menu: false,
  });

  const homeModalsContext = useMemo(() => {
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
      hideAll: () =>
        setIsModalOpen((prev) => ({
          ...prev,
          messenger: false,
          menu: false,
          noti: false,
        })),
      hideOthers: (modalName: ModalName) =>
        setIsModalOpen((prev) => ({
          ...prev,
          messenger: false,
          menu: false,
          noti: false,
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
