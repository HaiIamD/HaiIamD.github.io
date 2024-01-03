export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 1 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 50 : direction === 'down' ? -90 : 0,

      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transtation: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
