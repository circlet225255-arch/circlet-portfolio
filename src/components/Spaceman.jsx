import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

/* ─── Procedural planet surface texture (atmospheric bands) ─── */
const createPlanetTexture = () => {
  const W = 1024;
  const H = 512;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Base warm orange fill
  ctx.fillStyle = '#c47040';
  ctx.fillRect(0, 0, W, H);

  // Horizontal atmospheric band layers [yPercent, heightPercent, color]
  const bands = [
    [0,   3,  '#b85c30'],
    [3,   4,  '#e8a060'],
    [7,   5,  '#ffe8c0'],
    [12,  3,  '#d48040'],
    [15,  7,  '#e09050'],
    [22,  4,  '#ffd898'],
    [26,  6,  '#c86838'],
    [32,  5,  '#ff9760'],
    [37,  8,  '#ffe0a8'],
    [45,  3,  '#d07840'],
    [48,  9,  '#e89050'],
    [57,  4,  '#ffe8b8'],
    [61,  6,  '#c47040'],
    [67,  5,  '#e8a060'],
    [72,  8,  '#ffd090'],
    [80,  4,  '#d08048'],
    [84,  6,  '#e89858'],
    [90,  5,  '#ffe0b0'],
    [95,  5,  '#c86838'],
  ];

  bands.forEach(([yp, hp, color]) => {
    const y  = (yp / 100) * H;
    const bh = (hp / 100) * H;

    ctx.fillStyle = color;
    ctx.fillRect(0, y, W, bh);

    // Subtle edge shading per band
    const g = ctx.createLinearGradient(0, y, 0, y + bh);
    g.addColorStop(0,   'rgba(0,0,0,0.10)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.04)');
    g.addColorStop(1,   'rgba(0,0,0,0.10)');
    ctx.fillStyle = g;
    ctx.fillRect(0, y, W, bh);
  });

  // Turbulent streak noise
  for (let i = 0; i < 35; i++) {
    const y  = Math.random() * H;
    const bh = Math.random() * 5 + 1;
    ctx.fillStyle = `rgba(255,215,140,${(Math.random() * 0.09).toFixed(3)})`;
    ctx.fillRect(0, y, W, bh);
  }

  // Longitudinal vignette (poles are cooler/darker)
  const poleFade = ctx.createLinearGradient(0, 0, 0, H);
  poleFade.addColorStop(0,   'rgba(30,20,10,0.42)');
  poleFade.addColorStop(0.2, 'rgba(0,0,0,0)');
  poleFade.addColorStop(0.8, 'rgba(0,0,0,0)');
  poleFade.addColorStop(1,   'rgba(30,20,10,0.42)');
  ctx.fillStyle = poleFade;
  ctx.fillRect(0, 0, W, H);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
};

/* ─── Ring texture (1-D radial gradient, inner → outer) ─── */
const createRingTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width  = 512;
  canvas.height = 2;
  const ctx = canvas.getContext('2d');

  const g = ctx.createLinearGradient(0, 0, 512, 0);
  // Innermost diffuse fade
  g.addColorStop(0.00, 'rgba(160,100,45,0.00)');
  g.addColorStop(0.04, 'rgba(180,120,55,0.38)');
  // C ring (translucent)
  g.addColorStop(0.10, 'rgba(200,145,70,0.55)');
  g.addColorStop(0.18, 'rgba(165,115,55,0.38)');
  // B ring – brightest part
  g.addColorStop(0.22, 'rgba(230,170,90,0.80)');
  g.addColorStop(0.30, 'rgba(255,205,125,0.94)');
  g.addColorStop(0.40, 'rgba(245,185,105,0.88)');
  g.addColorStop(0.44, 'rgba(210,160,80,0.72)');
  // Cassini Division gap
  g.addColorStop(0.46, 'rgba(70,45,25,0.18)');
  g.addColorStop(0.49, 'rgba(30,18,10,0.04)');
  // A ring
  g.addColorStop(0.52, 'rgba(215,162,85,0.75)');
  g.addColorStop(0.62, 'rgba(230,178,98,0.68)');
  g.addColorStop(0.70, 'rgba(195,145,72,0.54)');
  // Outer feathering
  g.addColorStop(0.80, 'rgba(160,115,58,0.34)');
  g.addColorStop(0.90, 'rgba(130,88,42,0.16)');
  g.addColorStop(1.00, 'rgba(100,65,30,0.00)');

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 2);

  return new THREE.CanvasTexture(canvas);
};

/* ─── Saturn scene object ─── */
const Saturn = () => {
  const spinRef      = useRef();
  const planetTexture = useMemo(createPlanetTexture, []);
  const ringTexture   = useMemo(createRingTexture,   []);

  useFrame(({ clock }) => {
    if (spinRef.current) {
      // Slow axial spin  ≈ 1 full revolution every ~42 s
      spinRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    /*
     * Outer group: static axial tilt (Saturn ≈ 26.7°)
     * Inner group: Y-axis spin (ref)
     */
    <group rotation={[0, 0, -0.466]}>
      <group ref={spinRef}>

        {/* ── Planet sphere ── */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[1.52, 96, 96]} />
          <meshStandardMaterial
            map={planetTexture}
            roughness={0.82}
            metalness={0.06}
          />
        </mesh>

        {/* ── Ring disc (flat on equatorial plane) ── */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.08, 3.65, 160]} />
          <meshBasicMaterial
            map={ringTexture}
            side={THREE.DoubleSide}
            transparent
            opacity={0.92}
            depthWrite={false}
          />
        </mesh>

      </group>
    </group>
  );
};

/* ─── Canvas wrapper (replaces old SpacemanCanvas) ─── */
const SpacemanCanvas = () => {
  return (
    <Canvas
      className="scene-canvas"
      camera={{ position: [0, 1.4, 7.0], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>

        {/* Dim deep-space ambient */}
        <ambientLight intensity={0.10} color="#1a1240" />

        {/* Main warm sunlight – top-right (matches image) */}
        <directionalLight
          position={[5, 4, 2]}
          intensity={2.6}
          color="#ffd4a0"
        />

        {/* Blue atmospheric rim glow from behind-left */}
        <pointLight position={[-5, 0.5, -2]} intensity={12} color="#3a7aff" />

        {/* Warm soft fill from front-bottom */}
        <pointLight position={[1.5, -3, 4]}  intensity={1.0} color="#ff9760" />

        {/* Starfield */}
        <Stars
          radius={120}
          depth={60}
          count={4500}
          factor={3.5}
          saturation={0.25}
          fade
          speed={0.3}
        />

        <Saturn />

      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;
