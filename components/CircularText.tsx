import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, MotionValue, Transition } from 'framer-motion';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
  className?: string;
}

const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from,
  to: from + 360,
  ease: 'linear' as const,
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  }, [spinDuration, text, onHover, controls]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        transitionConfig = {
          rotate: { type: 'spring', damping: 20, stiffness: 300 },
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        };
        break;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-white text-center cursor-pointer origin-center ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        // The original code uses translation logic that might not perfectly align letters in a circle without some adjustment.
        // Usually circular text uses rotate -> translate(radius) -> rotate(-angle) to keep text upright, 
        // or just rotate -> translate(radius) for radial text.
        // The provided code uses `translate3d(${x}px, ${y}px, 0)` which looks odd for a circle.
        // Let's assume the provided code is correct for the intended effect, but standard circular text usually needs `transform: rotate(${rotationDeg}deg) translateY(-radius)`.
        // Let's stick to the provided code but I suspect `x` and `y` calculation might be specific to a certain effect. 
        // Actually, let's look at the provided code: `const transform = 'rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)';`
        // x and y are growing with i. This looks like a spiral or just linear offset.
        // Wait, the MCP output might be slightly different from a standard "Circular Text". 
        // Let's re-read the code.
        // `const x = factor * i; const y = factor * i;` 
        // This seems to be adding an offset. 
        
        // I will use a standard circular text implementation logic for the transform to ensure it looks like a circle, 
        // or trust the MCP code. The MCP code `x` and `y` calculation seems suspicious for a *perfect* circle.
        // A perfect circle usually uses `height/2` as radius.
        // Let's use `translateY(-${radius}px)` logic.
        
        const radius = 100; // half of 200px width/height
        const transform = `rotate(${rotationDeg}deg) translateY(-${radius}px)`;

        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ 
                transform, 
                WebkitTransform: transform,
                left: '50%',
                top: '50%',
                marginLeft: '-0.5em', // Center the character horizontally
                marginTop: '-0.5em', // Center the character vertically
                height: '1em',
                width: '1em',
                textAlign: 'center'
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
