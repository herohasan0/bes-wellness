import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";

const OpenModal = ({
  isOpen = false,
  closeModalProp,
  title,
  children,
  className,
  maxWidth = "max-w-fit",
  containerClassName,
}) => {
  function closeModal() {
    closeModalProp();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[999] overflow-y-auto"
        onClose={() => closeModal()}
      >
        {/* For backdrop */}
        <div
          onClick={() => closeModal()}
          className="fixed inset-0 bg-black/40"
          aria-hidden="true"
        />
        <div
          className={classNames(
            "flex flex-col py-8 px-4 text-center  mx-auto",
            maxWidth,
            containerClassName
          )}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block  align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className={classNames(
                "inline-block  p-6 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg",
                className
              )}
            >
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </Dialog.Title>

              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OpenModal;
