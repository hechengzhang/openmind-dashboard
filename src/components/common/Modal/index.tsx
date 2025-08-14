import { ReactNode } from "react";
import CloseSvg from '@/assets/images/common/close.svg?react'
import { Modal } from "antd";

export interface ModalProps {
  visible: boolean;
  setVisible: (v: boolean) => void;
}

interface ModalFullProps extends ModalProps {
  children: ReactNode;
  width?: number;
  title?: string | ReactNode;
}

const OpenMindModal = (props: ModalFullProps) => {
  const { visible, setVisible, children, ...rest } = props

  const hideModal = () => {
    setVisible(false)
  }
  
  return (
    <Modal
      {...rest}
      open={visible}
      afterClose={hideModal}
      onCancel={hideModal}
      footer={null}
      centered
      closeIcon={(
        <div className='w-[24px] h-[24px] cursor-pointer' onClick={hideModal}>
          <CloseSvg />
        </div>
      )}
    >
      {children}
    </Modal>
  )
}

export default OpenMindModal
