"use client"
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import React from "react";


type CardProps = {
    children?: React.ReactNode;
    onSwipe?: (direction: "left" | "right") => void;
    color: string;
    initialRotation: number
};

const swipeThreshold = 150;

export const Card: React.FC<CardProps> = ({ children, onSwipe, color, initialRotation }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-300, 0, 300], [initialRotation - 20, initialRotation, initialRotation + 20]);

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
        if (info.offset.x > swipeThreshold) {
            onSwipe?.("right");
        } else if (info.offset.x < -swipeThreshold) {
            onSwipe?.("left");
        }
    };

    return (
        <motion.div
            style={{
                x,
                rotate,
                touchAction: "pan-x",
                background: color,
                borderRadius: 16,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                width: 320,
                height: 480,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                userSelect: "none",
            }}
            className="flex flex-col items-center justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.div>
    );
};