import * as THREE from 'three';
import { Geometry } from './Geometry';
export function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3), // Gem
    },
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5), // Diamond
    },
  ];

  const soundEffects = [
    new Audio('./public/assets/sounds/hit2.ogg'),
    new Audio('./public/assets/sounds/hit3.ogg'),
    new Audio('./public/assets/sounds/hit4.ogg'),
  ];

  const materials = [
    // new THREE.MeshNormalMaterial(),
    // new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    // new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    // new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    // new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x3ab2c3,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)} // Unique key
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
}
