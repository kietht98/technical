import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Modal as ModalFlowbite, ModalInterface, ModalOptions } from "flowbite";
import Modal from "../Modal/Modal";

const $modalElement = document.getElementById("modalEl");

const options: ModalOptions = {
  placement: "bottom-right",
  backdrop: "dynamic",
  backdropClasses:
    "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
  closable: true,
  onHide: () => {
    console.log("modal is hidden");
  },
  onShow: () => {
    console.log("modal is shown");
  },
  onToggle: () => {
    console.log("modal has been toggled");
  },
};

const Layout = () => {
  const useModal: ModalInterface = new ModalFlowbite($modalElement, options);
  return (
    <>
      <Header />
      <div className="min-h-[100vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
      <button
        onClick={() => {
          const modal = useModal;
          console.log("modal", modal);
          modal.show();
        }}
      >
        modal
      </button>
      <Modal />
    </>
  );
};

export default Layout;
