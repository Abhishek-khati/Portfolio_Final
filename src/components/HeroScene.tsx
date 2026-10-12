import { useRef, useMemo, Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

/* ── Hook to detect light vs dark mode dynamically ── */
function useCurrentTheme(): 'light' | 'dark' {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') return 'dark'
    return (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark'
  })

  useEffect(() => {
    const updateTheme = () => {
      const current = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'dark'
      setTheme(current)
    }

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return theme
}

/* ── Hook to detect mobile screen ── */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < 768
  })

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

/* ── Central Holographic Data Core ── */
function GlassSphere({ isLight, isMobile }: { isLight: boolean; isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18
      meshRef.current.rotation.x = Math.sin(t * 0.12) * 0.18
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.28
      innerRef.current.rotation.z = Math.cos(t * 0.2) * 0.25
    }
  })

  const sphereRadius = isMobile ? 1.15 : 1.35
  const segments = isMobile ? 40 : 64

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
      {/* Outer Liquid Glass Surface */}
      <mesh ref={meshRef} castShadow>
        <sphereGeometry args={[sphereRadius, segments, segments]} />
        <MeshDistortMaterial
          color={isLight ? '#2563EB' : '#0c2340'}
          emissive={isLight ? '#1E40AF' : '#0891B2'}
          emissiveIntensity={isLight ? 0.35 : 0.25}
          roughness={isLight ? 0.15 : 0.08}
          metalness={isLight ? 0.2 : 0.55}
          distort={isLight ? 0.28 : 0.38}
          speed={2.0}
        />
      </mesh>

      {/* Inner Rotating Data Geodesic Core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[isMobile ? 0.82 : 0.92, 1]} />
        <meshBasicMaterial
          wireframe
          color={isLight ? '#4338CA' : '#5CE1FF'}
          transparent
          opacity={isLight ? 0.5 : 0.45}
        />
      </mesh>

      {/* Outer Atmospheric Aura Shell */}
      <mesh scale={1.16}>
        <sphereGeometry args={[sphereRadius, 24, 24]} />
        <meshBasicMaterial
          color={isLight ? '#38BDF8' : '#5CE1FF'}
          transparent
          opacity={isLight ? 0.12 : 0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  )
}

/* ── Orbiting Data Satellites ── */
function OrbitingNodes({ isLight, isMobile }: { isLight: boolean; isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.35
    groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.2
  })

  const nodeColor1 = isLight ? '#0284C7' : '#5CE1FF'
  const nodeColor2 = isLight ? '#7C3AED' : '#9B8CFF'
  const nodeColor3 = isLight ? '#059669' : '#3DFFC0'

  const distMult = isMobile ? 0.8 : 1.0

  return (
    <group ref={groupRef}>
      {/* Node 1: Cyan / Azure */}
      <mesh position={[2.4 * distMult, 0.4, 0]}>
        <sphereGeometry args={[isMobile ? 0.08 : 0.1, 16, 16]} />
        <meshBasicMaterial color={nodeColor1} />
      </mesh>
      {/* Node 2: Purple / Violet */}
      <mesh position={[-2.1 * distMult, -0.6, 0.8]}>
        <sphereGeometry args={[isMobile ? 0.07 : 0.09, 16, 16]} />
        <meshBasicMaterial color={nodeColor2} />
      </mesh>
      {/* Node 3: Emerald */}
      <mesh position={[0.5, 2.2 * distMult, -0.6]}>
        <sphereGeometry args={[isMobile ? 0.07 : 0.08, 16, 16]} />
        <meshBasicMaterial color={nodeColor3} />
      </mesh>
    </group>
  )
}

/* ── Particle Data Network ── */
function Particles({ count = 200, isLight }: { count?: number; isLight: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const { positions, speeds } = useMemo(() => {
    const pos: number[] = []
    const spd: number[] = []
    for (let i = 0; i < count; i++) {
      pos.push(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10
      )
      spd.push(Math.random() * 0.35 + 0.08)
    }
    return { positions: pos, speeds: spd }
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const initialPositions = useMemo(() => [...positions], [positions])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      dummy.position.set(
        initialPositions[ix] + Math.sin(t * speeds[i] + i) * 0.45,
        initialPositions[ix + 1] + Math.cos(t * speeds[i] * 0.7 + i) * 0.45,
        initialPositions[ix + 2]
      )
      const s = 0.024 + Math.sin(t * speeds[i] + i * 1.5) * 0.01
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        color={isLight ? '#0284C7' : '#5CE1FF'}
        transparent
        opacity={isLight ? 0.45 : 0.6}
      />
    </instancedMesh>
  )
}

/* ── Dual Orbital Rings ── */
function OrbitalRings({ isLight, isMobile }: { isLight: boolean; isMobile: boolean }) {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ring1.current) {
      ring1.current.rotation.z = t * 0.22
      ring1.current.rotation.x = t * 0.08
    }
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.16
      ring2.current.rotation.y = t * 0.14
    }
  })

  const r1 = isMobile ? 1.85 : 2.7
  const r2 = isMobile ? 2.35 : 3.5

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[r1, 0.016, 8, isMobile ? 64 : 120]} />
        <meshBasicMaterial
          color={isLight ? '#635BFF' : '#9B8CFF'}
          transparent
          opacity={isLight ? 0.45 : 0.35}
        />
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[r2, 0.012, 8, isMobile ? 64 : 120]} />
        <meshBasicMaterial
          color={isLight ? '#0284C7' : '#5CE1FF'}
          transparent
          opacity={isLight ? 0.4 : 0.22}
        />
      </mesh>
    </>
  )
}

/* ── Mouse-Responsive Parallax Camera ── */
function CameraRig({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree()

  useFrame(({ pointer }) => {
    if (isMobile) return // Disable parallax on touch devices
    camera.position.x += (pointer.x * 1.1 - camera.position.x) * 0.05
    camera.position.y += (pointer.y * 0.7 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}

/* ── Scene Assembler ── */
function Scene({ isLight, isMobile }: { isLight: boolean; isMobile: boolean }) {
  return (
    <>
      {/* Lighting tuned for both modes */}
      <ambientLight intensity={isLight ? 1.6 : 0.6} color={isLight ? '#ffffff' : '#0f172a'} />

      {isLight ? (
        <>
          <directionalLight position={[6, 8, 5]} intensity={3.2} color="#ffffff" />
          <pointLight position={[4, 4, 4]} intensity={2.8} color="#0284C7" />
          <pointLight position={[-4, -2, 2]} intensity={2.2} color="#635BFF" />
          <pointLight position={[0, -4, -3]} intensity={1.6} color="#059669" />
        </>
      ) : (
        <>
          <pointLight position={[4, 4, 4]} intensity={3.5} color="#5CE1FF" />
          <pointLight position={[-4, -2, 2]} intensity={2.5} color="#9B8CFF" />
          <pointLight position={[0, -4, -3]} intensity={1.8} color="#FFB347" />
          <Stars radius={60} depth={40} count={isMobile ? 400 : 1200} factor={3} fade speed={0.7} />
        </>
      )}

      <GlassSphere isLight={isLight} isMobile={isMobile} />
      <OrbitingNodes isLight={isLight} isMobile={isMobile} />
      <OrbitalRings isLight={isLight} isMobile={isMobile} />
      <Particles count={isMobile ? 70 : 200} isLight={isLight} />
      <CameraRig isMobile={isMobile} />
    </>
  )
}

/* ── Static Fallback ── */
function StaticFallback({ isLight }: { isLight: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 240,
          height: 240,
          borderRadius: '50%',
          background: isLight
            ? 'radial-gradient(circle at 38% 35%, rgba(0,112,243,0.35), rgba(99,91,255,0.2) 60%, transparent 80%)'
            : 'radial-gradient(circle at 38% 35%, rgba(92,225,255,0.28), rgba(155,140,255,0.15) 60%, transparent 80%)',
          border: isLight ? '1px solid rgba(0,112,243,0.3)' : '1px solid rgba(92,225,255,0.25)',
          boxShadow: isLight
            ? '0 0 80px rgba(0,112,243,0.2), inset 0 0 60px rgba(99,91,255,0.12)'
            : '0 0 80px rgba(92,225,255,0.2), inset 0 0 60px rgba(155,140,255,0.1)',
        }}
      />
    </div>
  )
}

export default function HeroScene() {
  const theme = useCurrentTheme()
  const isMobile = useIsMobile()
  const isLight = theme === 'light'

  return (
    <Suspense fallback={<StaticFallback isLight={isLight} />}>
      <Canvas
        camera={{ position: [0, 0, isMobile ? 5.4 : 7.2], fov: 50 }}
        dpr={[1, isMobile ? 1.4 : 1.75]}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene isLight={isLight} isMobile={isMobile} />
      </Canvas>
    </Suspense>
  )
}
