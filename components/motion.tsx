"use client";
import { motion } from 'framer-motion';

/* Proxy a motion.div component, why? because next-js won't allow motion.div's in server componenets, and we need those features! */
// export default motion;

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;

export const MotionSVG = motion.svg;
export const MotionA = motion.a;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionUl = motion.ul;
export const MotionOl = motion.ol;
export const MotionLi = motion.li;
export const MotionImg = motion.img;
export const MotionHr = motion.hr;