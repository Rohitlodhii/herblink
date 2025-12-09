import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

const DialogProvider = ({trigger , Content} : { trigger : React.ReactNode , Content :() => React.ReactElement}) => {
  return (
    <div>
      <Dialog>
  <DialogTrigger>
        {trigger}
  </DialogTrigger>
  <DialogContent>
    <DialogHeader className='hidden'>
      <DialogTitle className='hidden'></DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <Content/>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default DialogProvider
