import  { useEffect, useState } from 'react';

const MovingImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '700px',
        overflow: 'scroll',
        backgroundColor:'white'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          transform: `translate(-${scrollPosition}px, ${scrollPosition}px)`,
          transition: 'transform 1s ease-in-out',
        }}
      >
        <img
          src="src/assets/truck.png"
          alt="Moving Image"
          style={{ width: '200px', height: '100px', marginTop:'300px', marginRight:'100px' }}
        />
      </div>
      {/* Rest of the content */}
    </div>
  );
};

export default MovingImage;
