'use client';

import { useEffect, useState } from 'react';

type Shape = {
  id: number;
  type: 'circle' | 'cross';
  size: number;
  left: number;
  top: number;
  zBase: number;
};

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const numShapes = 20;
    const newShapes: Shape[] = [];
    for (let i = 0; i < numShapes; i++) {
      newShapes.push({
        id: i,
        type: Math.random() > 0.5 ? 'circle' : 'cross',
        size: Math.random() * 30 + 10,
        left: Math.random() * 100, // vw
        top: Math.random() * 100, // vh
        zBase: Math.random() * 400 - 200,
      });
    }
    setShapes(newShapes);
  }, []);

  return (
    <div className="floating-shapes" id="floating-shapes">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`shape ${shape.type}`}
          style={{
            width: shape.type === 'circle' ? `${shape.size}px` : undefined,
            height: shape.type === 'circle' ? `${shape.size}px` : undefined,
            left: `${shape.left}vw`,
            top: `${shape.top}vh`,
            transform: `translateZ(${shape.zBase}px)`,
          }}
        />
      ))}
    </div>
  );
}
