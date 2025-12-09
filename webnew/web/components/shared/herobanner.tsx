"use client";

//import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { useRouter } from 'next/navigation'

const HeroBanner = () => {

    const router = useRouter();

    const pushTo = ( r : string ) => {
        router.push(r)
    }

  return (
    <div className=''>
      {/* <Carousel>
  <CarouselContent className=''>
    <CarouselItem onClick={()=>pushTo('/ppt')}>
        <img className='cursor-pointer' src='/banner1.png' />
    </CarouselItem>
    <CarouselItem onClick={()=>pushTo('/ppt')}>
        <img className='cursor-pointer' src='/banner3.png' />
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel> */}
<img className='cursor-pointer' src='/banner3.png' onClick={()=>pushTo('/working')} />
    </div>
  )
}

export default HeroBanner
