'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { getNumberItem, setNumberItem } from '@/lib/storage';

const STORAGE_KEY = 'naman_runner_hi_xp';
const W = 800;
const H = 220;
const GROUND_Y = 190;
const STAND_H = 22;
const DUCK_H = 10;
const P_WIDTH = 18;
const GRAV = 0.58;
const JUMP_VEL = -10.5;

interface Obstacle {
  type: 0 | 1; // 0 = ground, 1 = flying
  x: number;
  y: number;
  w: number;
  h: number;
  scored: boolean;
}

export function useRunner() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [xp, setXp] = useState(0);
  const [hi, setHi] = useState(0);
  const [state, setState] = useState<'IDLE' | 'RUNNING' | 'GAMEOVER'>('IDLE');

  const stateRef = useRef<'IDLE' | 'RUNNING' | 'GAMEOVER'>('IDLE');
  const xpRef = useRef(0);
  const hiRef = useRef(0);

  const playerRef = useRef({
    x: 60,
    y: GROUND_Y - STAND_H,
    vy: 0,
    isGrounded: true,
    isDucking: false,
    runFrame: 0,
    frameTimer: 0,
  });

  const obstaclesRef = useRef<Obstacle[]>([]);
  const obsTimerRef = useRef(0);
  const nextSpawnRef = useRef(80);
  const speedRef = useRef(4.2);

  const farXRef = useRef(0);
  const midXRef = useRef(0);
  const groundTickXRef = useRef(0);

  const isPausedRef = useRef(false);
  const isVisibleRef = useRef(true);

  // Parallax backdrop definitions
  const farSkyline = useRef([
    { x: 0, w: 90, h: 55 },
    { x: 130, w: 70, h: 40 },
    { x: 240, w: 110, h: 65 },
    { x: 390, w: 80, h: 50 },
    { x: 510, w: 100, h: 60 },
    { x: 650, w: 80, h: 45 },
    { x: 770, w: 90, h: 55 },
  ]);

  const midSkyline = useRef([
    { x: 20, w: 45, h: 32 },
    { x: 110, w: 55, h: 28 },
    { x: 210, w: 40, h: 36 },
    { x: 310, w: 60, h: 30 },
    { x: 420, w: 50, h: 34 },
    { x: 520, w: 45, h: 26 },
    { x: 620, w: 65, h: 38 },
    { x: 730, w: 50, h: 30 },
  ]);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    const storedHi = getNumberItem(STORAGE_KEY, 0);
    hiRef.current = storedHi;
    const timer = setTimeout(() => {
      setHi(storedHi);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const resetGame = useCallback(() => {
    xpRef.current = 0;
    speedRef.current = 4.2;
    setXp(0);

    const p = playerRef.current;
    p.y = GROUND_Y - STAND_H;
    p.vy = 0;
    p.isGrounded = true;
    p.isDucking = false;

    obstaclesRef.current = [];
    obsTimerRef.current = 0;
    nextSpawnRef.current = 75;
  }, []);

  const jump = useCallback(() => {
    if (stateRef.current === 'IDLE' || stateRef.current === 'GAMEOVER') {
      resetGame();
      setState('RUNNING');
      stateRef.current = 'RUNNING';
      playerRef.current.vy = JUMP_VEL;
      playerRef.current.isGrounded = false;
    } else if (
      stateRef.current === 'RUNNING' &&
      playerRef.current.isGrounded &&
      !playerRef.current.isDucking
    ) {
      playerRef.current.vy = JUMP_VEL;
      playerRef.current.isGrounded = false;
    }
  }, [resetGame]);

  const startDuck = useCallback(() => {
    if (stateRef.current === 'RUNNING' && playerRef.current.isGrounded) {
      playerRef.current.isDucking = true;
    }
  }, []);

  const endDuck = useCallback(() => {
    playerRef.current.isDucking = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function handleResize() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    // Keyboard handlers
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        const rect = canvas!.getBoundingClientRect();
        if (
          document.activeElement === canvas ||
          (rect.top >= 0 && rect.bottom <= window.innerHeight)
        ) {
          e.preventDefault();
        }
        jump();
      } else if (e.code === 'ArrowDown') {
        const rect = canvas!.getBoundingClientRect();
        if (
          document.activeElement === canvas ||
          (rect.top >= 0 && rect.bottom <= window.innerHeight)
        ) {
          e.preventDefault();
        }
        startDuck();
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      if (e.code === 'ArrowDown') {
        endDuck();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Touch and pointer handlers
    let touchHoldTimer: NodeJS.Timeout | null = null;
    let isTouching = false;

    function handlePointerDown() {
      canvas!.focus();
      isTouching = true;
      touchHoldTimer = setTimeout(() => {
        if (isTouching) startDuck();
      }, 180);
    }

    function handlePointerUp() {
      if (touchHoldTimer) clearTimeout(touchHoldTimer);
      if (playerRef.current.isDucking) {
        endDuck();
      } else if (isTouching) {
        jump();
      }
      isTouching = false;
    }

    function handlePointerCancel() {
      if (touchHoldTimer) clearTimeout(touchHoldTimer);
      endDuck();
      isTouching = false;
    }

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerCancel);

    // Visibility and Intersection Observers
    function handleVisibilityChange() {
      isPausedRef.current = document.hidden;
    }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Main animation loop
    let lastTime = 0;
    let accumulator = 0;
    const timestep = 1000 / 60;
    let animId: number;

    function spawnObstacle() {
      const type = (xpRef.current > 120 && Math.random() > 0.45) ? 1 : 0;
      if (type === 0) {
        const h = 22 + Math.floor(Math.random() * 20);
        const w = 14 + Math.floor(Math.random() * 8);
        obstaclesRef.current.push({
          type: 0,
          x: W + 10,
          y: GROUND_Y - h,
          w,
          h,
          scored: false,
        });
      } else {
        obstaclesRef.current.push({
          type: 1,
          x: W + 10,
          y: GROUND_Y - 26,
          w: 32,
          h: 10,
          scored: false,
        });
      }
    }

    function update() {
      if (stateRef.current !== 'RUNNING') return;

      const spd = 4.2 + Math.min(xpRef.current / 1000, 3.2);
      speedRef.current = spd;

      farXRef.current = (farXRef.current + spd * 0.25) % W;
      midXRef.current = (midXRef.current + spd * 0.5) % W;
      groundTickXRef.current = (groundTickXRef.current + spd) % 24;

      const p = playerRef.current;
      const currentH = p.isDucking ? DUCK_H : STAND_H;

      if (!p.isGrounded) {
        p.vy += GRAV;
        p.y += p.vy;
        if (p.y >= GROUND_Y - currentH) {
          p.y = GROUND_Y - currentH;
          p.vy = 0;
          p.isGrounded = true;
        }
      } else {
        p.y = GROUND_Y - currentH;
      }

      p.frameTimer++;
      if (p.frameTimer >= 8) {
        p.runFrame = (p.runFrame + 1) % 2;
        p.frameTimer = 0;
      }

      obsTimerRef.current++;
      if (obsTimerRef.current >= nextSpawnRef.current) {
        spawnObstacle();
        obsTimerRef.current = 0;
        nextSpawnRef.current = 65 + Math.floor(Math.random() * 55);
      }

      const pL = p.x + 2;
      const pR = p.x + P_WIDTH - 2;
      const pT = p.y + 2;
      const pB = p.y + currentH;

      const obs = obstaclesRef.current;
      for (let i = obs.length - 1; i >= 0; i--) {
        const o = obs[i];
        o.x -= spd;

        if (!o.scored && o.x + o.w < p.x) {
          o.scored = true;
          xpRef.current += 15;
        }

        if (pR > o.x && pL < o.x + o.w && pB > o.y && pT < o.y + o.h) {
          stateRef.current = 'GAMEOVER';
          setState('GAMEOVER');

          if (xpRef.current > hiRef.current) {
            hiRef.current = xpRef.current;
            setHi(xpRef.current);
            setNumberItem(STORAGE_KEY, xpRef.current);
          }
        }

        if (o.x + o.w < -20) {
          obs.splice(i, 1);
        }
      }

      xpRef.current++;
      setXp(xpRef.current);
    }

    function render() {
      if (!ctx) return;

      // Surface Background
      ctx.fillStyle = '#161B1E';
      ctx.fillRect(0, 0, W, H);

      // Parallax 1: Far Skyline (#1C2226)
      ctx.fillStyle = '#1C2226';
      farSkyline.current.forEach((b) => {
        let x1 = b.x - farXRef.current;
        if (x1 < -b.w) x1 += W + 50;
        ctx.fillRect(x1, GROUND_Y - b.h, b.w, b.h);
        ctx.fillRect(x1 + W + 50, GROUND_Y - b.h, b.w, b.h);
      });

      // Parallax 2: Mid Skyline (#2B3439)
      ctx.fillStyle = '#2B3439';
      midSkyline.current.forEach((b) => {
        let x2 = b.x - midXRef.current;
        if (x2 < -b.w) x2 += W + 50;
        ctx.fillRect(x2, GROUND_Y - b.h, b.w, b.h);
        ctx.fillRect(x2 + W + 50, GROUND_Y - b.h, b.w, b.h);
      });

      // Parallax 3: Ground line (#2B3439)
      ctx.strokeStyle = '#2B3439';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + 0.5);
      ctx.lineTo(W, GROUND_Y + 0.5);
      ctx.stroke();

      // Ground ticks
      ctx.beginPath();
      for (let tx = -groundTickXRef.current; tx < W; tx += 24) {
        ctx.moveTo(tx, GROUND_Y + 1);
        ctx.lineTo(tx, GROUND_Y + 7);
      }
      ctx.stroke();

      // Obstacles
      ctx.fillStyle = '#E8E4D8';
      obstaclesRef.current.forEach((o) => {
        ctx.fillRect(o.x, o.y, o.w, o.h);
        if (o.type === 1) {
          ctx.fillStyle = '#E5A03A';
          ctx.fillRect(o.x + 2, o.y + 2, o.w - 4, 2);
          ctx.fillStyle = '#E8E4D8';
        }
      });

      // Player Sprite
      const p = playerRef.current;
      const py = p.y;

      if (p.isDucking) {
        ctx.fillStyle = '#E5A03A';
        ctx.fillRect(p.x, py + 2, P_WIDTH + 4, 8);
        ctx.fillStyle = '#8A6224';
        ctx.fillRect(p.x + 8, py, 10, 4);
        ctx.fillStyle = '#E8E4D8';
        ctx.fillRect(p.x + 14, py + 1, 2, 2);
      } else {
        ctx.fillStyle = '#8A6224';
        ctx.fillRect(p.x + 2, py, 12, 6);
        ctx.fillStyle = '#E8E4D8';
        ctx.fillRect(p.x + 10, py + 2, 2, 2);
        ctx.fillStyle = '#E5A03A';
        ctx.fillRect(p.x + 2, py + 6, 12, 10);

        ctx.fillStyle = '#2B3439';
        if (!p.isGrounded) {
          ctx.fillRect(p.x + 3, py + 16, 4, 4);
          ctx.fillRect(p.x + 9, py + 16, 4, 4);
        } else if (p.runFrame === 0) {
          ctx.fillRect(p.x + 2, py + 16, 4, 6);
          ctx.fillRect(p.x + 10, py + 16, 4, 4);
        } else {
          ctx.fillRect(p.x + 3, py + 16, 4, 4);
          ctx.fillRect(p.x + 9, py + 16, 4, 6);
        }
      }

      // HUD Text
      ctx.textAlign = 'center';
      if (stateRef.current === 'IDLE') {
        ctx.font = '600 16px "Chakra Petch", sans-serif';
        ctx.fillStyle = '#E8E4D8';
        ctx.fillText('PRESS SPACE OR TAP TO START', W / 2, H / 2 - 10);
        ctx.font = '400 12px "IBM Plex Sans", sans-serif';
        ctx.fillStyle = '#8E9993';
        ctx.fillText('Jump over ground obstacles / Duck under flying bars', W / 2, H / 2 + 14);
      } else if (stateRef.current === 'GAMEOVER') {
        ctx.font = '600 18px "Chakra Petch", sans-serif';
        ctx.fillStyle = '#E8E4D8';
        ctx.fillText('SIMULATION ENDED', W / 2, H / 2 - 20);
        ctx.font = '600 15px "Chakra Petch", sans-serif';
        ctx.fillStyle = '#E5A03A';
        ctx.fillText('XP GAINED: ' + xpRef.current + '  |  BEST HI: ' + hiRef.current, W / 2, H / 2 + 4);
        ctx.font = '400 12px "IBM Plex Sans", sans-serif';
        ctx.fillStyle = '#8E9993';
        ctx.fillText('Press Space or tap to retry', W / 2, H / 2 + 26);
      }
    }

    function gameLoop(time: number) {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      if (!isPausedRef.current && isVisibleRef.current) {
        accumulator += delta;
        while (accumulator >= timestep) {
          update();
          accumulator -= timestep;
        }
        render();
      }
      animId = requestAnimationFrame(gameLoop);
    }

    animId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointercancel', handlePointerCancel);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [jump, startDuck, endDuck]);

  return {
    canvasRef,
    containerRef,
    xp,
    hi,
    state,
    jump,
  };
}
