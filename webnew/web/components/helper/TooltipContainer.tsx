import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type ToolTipContainerProps = {
    trigger : String, 
    content : String
}

const ToolTip = ({ trigger, content }: ToolTipContainerProps) => {
  return (
    <Tooltip>
  <TooltipTrigger className='cursor-pointer'>{trigger}</TooltipTrigger>
  <TooltipContent>
    <p>{content}</p>
  </TooltipContent>
</Tooltip>
  )
}

export default ToolTip
