import React from 'react'

import { Drawer, DrawerClose,  DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'


const DrawerProvider = ({trigger , Content} : { trigger : React.ReactNode , Content :() => React.ReactElement}) => {
  return (
    <div className='md:hidden'>
     <Drawer>
  <DrawerTrigger>{trigger}</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader className='hidden' >
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
   <Content/>
  </DrawerContent>
</Drawer>
    </div>
  )
}

export default DrawerProvider
