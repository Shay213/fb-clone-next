import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface HomeModalsContext {
  isModalOpen: {
    messenger: boolean;
    noti: boolean;
    menu: boolean;
  };
  setIsModalOpen: Dispatch<
    SetStateAction<{
      messenger: boolean;
      noti: boolean;
      menu: boolean;
    }>
  >;
}

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
      isModalOpen,
      setIsModalOpen,
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <HomeModalsContext.Provider value={homeModalsContext}>
      {children}
    </HomeModalsContext.Provider>
  );
};

export default HomeModalsProvider;
