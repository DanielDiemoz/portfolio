/* splite.tsx */
'use client'

import '@splinetool/runtime';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return <Spline scene={scene} className={className} />;
}
