export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 1 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 1 : direction === 'right' ? -80 : 0, // Corrected the direction value

      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.9,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
