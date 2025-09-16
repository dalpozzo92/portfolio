import { useTransform, useScroll } from 'framer-motion';

export const useScrollParallax = (factor = 0.5) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 1], [0, factor]);
};