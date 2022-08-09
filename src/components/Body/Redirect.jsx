import React from 'react';

const Redirect = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '70vh', backgroundColor: 'white' }}>
      <div className='submit--container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <img src='submitted-done.webp' alt='submit successful' width='100px' />
        </div>
        <p style={{ fontSize: '30px', fontWeight: 'bold', margin: '40px 0 10px 0' }}>Congratulations!</p>
        <p style={{ fontSize: '20px', marginBottom: '40px', textAlign: 'center' }}>You already became one of our MUJI member! Start shopping!</p>
      </div>
    </div>
  )
};

export default Redirect;