// components/Animation.js
export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const iconMotion = {
  initial: { opacity: 0, scale: 0 },
  animate: (custom) => ({
    opacity: 1,
    scale: 1,
    x: [custom.xStart, 0, custom.xEnd],
    y: [custom.yStart, 0, custom.yEnd],
    transition: { duration: 2, ease: "easeInOut" },
  }),
  exit: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
};

export const centralIconMotion = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 4, ease: "linear" },
  },
};
