

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import { useState } from 'react';




const NavBar = () => {

  const [isOpen, onOpenChange] = useState(false)


  return (

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog web</span>
              <Button color='primary' variant='shadow' onClick={() => onOpenChange(true)} >Add Blog</Button>
        </div>
        <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Blog</ModalHeader>
              <ModalBody>
                <form id='add-blog' className='flex flex-col gap-2'
                onSubmit={async (e)=>{
                  e.preventDefault();
                  onOpenChange(false)
                  
                }}
                 >
                  <Input  label="Title"  name="title" />
                  
                  <Input label="Description"  name="description" />
                  <Input label="Author"  name="author" />
                </form>

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type='submit' form='add-blog'>
                 Add Blog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </nav>

  )
}

export default NavBar





