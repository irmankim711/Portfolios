"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Move3d, Terminal } from "lucide-react";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"status" | "code">("status");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Main Group for interactive inspection
    const workstation = new THREE.Group();
    scene.add(workstation);

    // ----------------------------------------------------
    // 1. Dynamic CRT Screen Canvas & Texture
    // ----------------------------------------------------
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 512;
    screenCanvas.height = 384;
    const screenCtx = screenCanvas.getContext("2d");

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;

    // ----------------------------------------------------
    // 2. Materials
    // ----------------------------------------------------
    // Sleek dark retro chassis (ThinkPad / SGI workstation graphite)
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1c1f26,
      roughness: 0.5,
      metalness: 0.15,
      flatShading: true,
    });

    // Darker bezel trim
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x12141a,
      roughness: 0.6,
      metalness: 0.1,
    });

    // Phosphor screen material with self-illumination
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    // Accent plastic for floppy / buttons
    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0a0c10,
      roughness: 0.8,
    });

    // Glowing LED
    const ledMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x22c55e,
      emissiveIntensity: 1.5,
      roughness: 0.2,
    });

    // ----------------------------------------------------
    // 3. Monitor Body & Stand
    // ----------------------------------------------------
    // Main Monitor Casing
    const monitorGeo = new THREE.BoxGeometry(2.5, 2.1, 1.8);
    const monitorMesh = new THREE.Mesh(monitorGeo, chassisMat);
    monitorMesh.position.y = 0.5;
    workstation.add(monitorMesh);

    // Screen Front Bezel Frame
    const bezelGeo = new THREE.BoxGeometry(2.35, 1.9, 0.15);
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.set(0, 0.5, 0.95);
    workstation.add(bezelMesh);

    // CRT Screen Display Plane (slightly curved look via subtle position)
    const screenGeo = new THREE.PlaneGeometry(1.9, 1.45);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.58, 1.04);
    workstation.add(screenMesh);

    // Floppy disk slot
    const slotGeo = new THREE.BoxGeometry(0.7, 0.05, 0.05);
    const slotMesh = new THREE.Mesh(slotGeo, darkAccentMat);
    slotMesh.position.set(0.6, -0.22, 1.03);
    workstation.add(slotMesh);

    // Power / Drive Activity LED
    const ledGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const ledMesh = new THREE.Mesh(ledGeo, ledMat);
    ledMesh.position.set(1.0, -0.22, 1.04);
    workstation.add(ledMesh);

    // Badge plate
    const badgeGeo = new THREE.BoxGeometry(0.4, 0.08, 0.02);
    const badgeMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.3 });
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
    badgeMesh.position.set(-0.8, -0.22, 1.04);
    workstation.add(badgeMesh);

    // Swivel Neck Stand
    const neckGeo = new THREE.CylinderGeometry(0.45, 0.55, 0.4, 24);
    const neckMesh = new THREE.Mesh(neckGeo, bezelMat);
    neckMesh.position.set(0, -0.7, 0);
    workstation.add(neckMesh);

    // Base Plate / Stand Foot
    const baseGeo = new THREE.BoxGeometry(1.8, 0.12, 1.6);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    baseMesh.position.set(0, -0.92, 0);
    workstation.add(baseMesh);

    // ----------------------------------------------------
    // 4. Keyboard
    // ----------------------------------------------------
    const keyboardGroup = new THREE.Group();
    keyboardGroup.position.set(0, -0.9, 1.5);
    keyboardGroup.rotation.x = 0.12; // Slight tilt towards viewer
    workstation.add(keyboardGroup);

    // Keyboard Base Tray
    const kbTrayGeo = new THREE.BoxGeometry(2.3, 0.14, 0.95);
    const kbTray = new THREE.Mesh(kbTrayGeo, chassisMat);
    keyboardGroup.add(kbTray);

    // Keycaps Bed
    const keyBedGeo = new THREE.BoxGeometry(2.1, 0.08, 0.78);
    const keyBed = new THREE.Mesh(keyBedGeo, darkAccentMat);
    keyBed.position.set(0, 0.06, -0.02);
    keyboardGroup.add(keyBed);

    // Individual stylized key blocks for physical aesthetic
    const keyRows = 4;
    const keyCols = 10;
    const keyWidth = 0.16;
    const keyDepth = 0.13;
    const keyGeo = new THREE.BoxGeometry(keyWidth, 0.06, keyDepth);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x272c36,
      roughness: 0.6,
      metalness: 0.1,
    });

    const spaceBarGeo = new THREE.BoxGeometry(0.9, 0.06, keyDepth);
    const spaceBar = new THREE.Mesh(spaceBarGeo, keyMat);
    spaceBar.position.set(0, 0.11, 0.24);
    keyboardGroup.add(spaceBar);

    for (let r = 0; r < keyRows - 1; r++) {
      for (let c = 0; c < keyCols; c++) {
        const key = new THREE.Mesh(keyGeo, keyMat);
        const xPos = (c - (keyCols - 1) / 2) * 0.19;
        const zPos = (r - (keyRows - 1) / 2) * 0.17 - 0.08;
        key.position.set(xPos, 0.11, zPos);
        keyboardGroup.add(key);
      }
    }

    // ----------------------------------------------------
    // 5. Lighting Setup
    // ----------------------------------------------------
    // Studio Key Light (soft warm white)
    const keyLight = new THREE.DirectionalLight(0xfff8ee, 2.0);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    // Fill Light (cool studio blue-gray)
    const fillLight = new THREE.DirectionalLight(0x94a3b8, 1.2);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    // Top / Rim light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
    rimLight.position.set(0, 5, -2);
    scene.add(rimLight);

    // Screen Glow Light (casts green/cyan glow from CRT onto keyboard)
    const screenGlow = new THREE.PointLight(0x10b981, 1.5, 4);
    screenGlow.position.set(0, 0.6, 1.5);
    workstation.add(screenGlow);

    // Ambient baseline
    const ambientLight = new THREE.AmbientLight(0x111622, 1.5);
    scene.add(ambientLight);

    // ----------------------------------------------------
    // 6. Interactive Drag & Mouse Tilt
    // ----------------------------------------------------
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let targetRotY = -0.15; // default handsome 3/4 angle
    let targetRotX = 0.08;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevX;
        const deltaY = clientY - prevY;

        targetRotY += deltaX * 0.006;
        targetRotX += deltaY * 0.004;

        // Clamp vertical tilt
        targetRotX = Math.max(-0.25, Math.min(0.35, targetRotX));

        prevX = clientX;
        prevY = clientY;
      } else {
        // Subtle natural parallax
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);

        targetRotY = normX * 0.25 - 0.15;
        targetRotX = -normY * 0.15 + 0.08;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    domEl.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // ----------------------------------------------------
    // 7. Render Loop & Dynamic CRT Content Drawing
    // ----------------------------------------------------
    let animationId: number;
    let clock = new THREE.Clock();
    let lastCanvasUpdate = 0;

    const renderScreenText = (time: number) => {
      if (!screenCtx) return;

      const cursorVisible = Math.floor(time * 2) % 2 === 0;

      // Dark CRT backdrop
      screenCtx.fillStyle = "#0c100e";
      screenCtx.fillRect(0, 0, 512, 384);

      // CRT Scanline lines effect
      screenCtx.fillStyle = "rgba(0, 0, 0, 0.25)";
      for (let y = 0; y < 384; y += 4) {
        screenCtx.fillRect(0, y, 512, 2);
      }

      // Phosphor Green Terminal text
      screenCtx.fillStyle = "#34d399";
      screenCtx.font = "bold 20px monospace";
      screenCtx.fillText("IRMAN-OS // v2.6.4", 28, 48);

      screenCtx.fillStyle = "#6ee7b7";
      screenCtx.font = "16px monospace";
      screenCtx.fillText("SYS: Full-Stack Engineer", 28, 88);
      screenCtx.fillText("LOC: Malaysia (UTC+8)", 28, 116);
      screenCtx.fillText("NET: 100% Operational", 28, 144);

      screenCtx.fillStyle = "#94a3b8";
      screenCtx.fillText("----------------------------", 28, 176);

      screenCtx.fillStyle = "#38bdf8";
      screenCtx.fillText("> git status", 28, 208);

      screenCtx.fillStyle = "#a7f3d0";
      screenCtx.fillText("On branch main: all good.", 28, 238);
      screenCtx.fillText("Ready for collaboration.", 28, 268);

      // Blinking Prompt
      screenCtx.fillStyle = "#34d399";
      screenCtx.font = "bold 18px monospace";
      screenCtx.fillText(
        `guest@irman:~$ ${cursorVisible ? "█" : " "}`,
        28,
        315
      );

      // Screen edge vignette shadow
      const gradient = screenCtx.createRadialGradient(256, 192, 160, 256, 192, 260);
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(1, "rgba(0,0,0,0.65)");
      screenCtx.fillStyle = gradient;
      screenCtx.fillRect(0, 0, 512, 384);

      screenTexture.needsUpdate = true;
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle breathing float
      workstation.position.y = Math.sin(elapsed * 1.5) * 0.05;

      // Smooth camera/object lerp
      workstation.rotation.y += (targetRotY - workstation.rotation.y) * 0.06;
      workstation.rotation.x += (targetRotX - workstation.rotation.x) * 0.06;

      // Subtle pulse on screen glow light
      screenGlow.intensity = 1.3 + Math.sin(elapsed * 3) * 0.2;

      // Update screen text at ~10 FPS for authentic terminal feel
      if (elapsed - lastCanvasUpdate > 0.1) {
        renderScreenText(elapsed);
        lastCanvasUpdate = elapsed;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      domEl.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      domEl.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      // Geometries & materials cleanup
      monitorGeo.dispose();
      bezelGeo.dispose();
      screenGeo.dispose();
      slotGeo.dispose();
      ledGeo.dispose();
      badgeGeo.dispose();
      neckGeo.dispose();
      baseGeo.dispose();
      kbTrayGeo.dispose();
      keyBedGeo.dispose();
      keyGeo.dispose();
      spaceBarGeo.dispose();

      chassisMat.dispose();
      bezelMat.dispose();
      screenMat.dispose();
      darkAccentMat.dispose();
      ledMat.dispose();
      badgeMat.dispose();
      keyMat.dispose();
      screenTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none">
      {/* 3D Canvas (completely borderless, seamless alpha blending into the page) */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Workstation: Drag to rotate"
      />

      {/* Subtle, minimal indicator (no box/border) */}
      <div className="absolute bottom-2 flex items-center gap-2 text-[11px] font-mono text-slate-500 pointer-events-none select-none">
        <Move3d className="w-3.5 h-3.5 text-emerald-400/80" />
        <span>Drag to rotate retro workstation</span>
      </div>
    </div>
  );
}
