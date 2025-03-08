"use client"

import { motion } from "framer-motion"

export const fadeIn = (direction: "up" | "down" | "left" | "right" | "none" = "none", delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
      },
    },
  }
}

export const staggerContainer = (staggerChildren: number, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
      },
    },
  }
}

export const slideIn = (direction: "up" | "down" | "left" | "right", type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  }
}

export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionHeader = motion.header
export const MotionFooter = motion.footer
export const MotionSpan = motion.span
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionH3 = motion.h3
export const MotionP = motion.p
export const MotionUl = motion.ul
export const MotionLi = motion.li
export const MotionA = motion.a
export const MotionButton = motion.button

