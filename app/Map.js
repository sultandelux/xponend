import React from "react";
// import ScrollingDiv from "Components/ScrollingDiv/ScrollingDiv";
const Map = () => {
  return (
    <div class="grid lg:grid-cols-2 sm:grid-cols-0">
      <div className='flex justify-end lg:mr-10 my-10'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4249373072316!2d76.86793555138122!3d43.221549579036136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369057e19757d%3A0x898526971b2bb260!2sXponend!5e0!3m2!1sen!2skz!4v1678908105318!5m2!1sen!2skz'
          width='100%'
          height='400'
          style={{
            borderRadius: 10,
            border: 0,
            filter: 'grayscale(100%) invert(92%) contrast(83%)',
          }}
          // style={{border-radius: 10}}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
      <div className='flex justify-end lg:my-10'>
        {/* <ScrollingDiv> */}
        <iframe id="myIframe"
          src='https://calendly.com/xponend/15min'
          width='100%'
          height='400'
          style={{
            borderRadius: 10,
            border: 0,
            filter: 'grayscale(100%) invert(92%) contrast(83%)',
            overflow: 'hidden',
          }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />

      </div>
    </div>


  )
}

export default Map
