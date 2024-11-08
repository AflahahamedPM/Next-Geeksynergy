import React from 'react'
import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, Button } from '@nextui-org/react'
import ProductForm from './ProductForm'

const AdminProductModal = ({isOpen, onOpenChange}) => {

  return (
    <Modal isOpen={isOpen} scrollBehavior='normal' onOpenChange={onOpenChange} hideCloseButton={true} placement='center' className='w-1/2 bg-white rounded-lg'>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex justify-center items-center gap-1 p-4 text-darkGrey text-2xl">Add Products</ModalHeader>
          <ModalBody>
            <ProductForm/>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" className='p-2 bg-red-400 mr-3' variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>

  )
}

export default AdminProductModal