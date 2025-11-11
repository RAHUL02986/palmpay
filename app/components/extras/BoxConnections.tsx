'use client';
import React, { useEffect, useRef, useCallback } from 'react';
 
interface Box {
  id: string;
  color: string;
  style: React.CSSProperties;
}
 
const boxes: Box[] = [
  { id: 'teal', color: 'teal', style: { width: '96px', height: '96px', marginLeft: '10%' } },
  { id: 'red', color: 'red', style: { width: '96px', height: '96px',  marginLeft: '30%' } },
  { id: 'green', color: 'green', style: { width: '96px', height: '96px', marginTop: '2em', marginLeft: '10%' } },
  { id: 'purple', color: 'purple', style: { width: '96px', height: '96px', } },
  { id: 'orange', color: 'orange', style: { width: '96px', height: '96px',  marginTop: '2em', marginLeft: '8em' } },
  { id: 'aqua', color: 'aqua', style: { width: '96px', height: '96px', marginLeft: '4%' } },
];
 
const connections = [
  ['teal', 'orange'],
  ['red', 'orange'],
  ['teal', 'aqua'],
  ['red', 'aqua'],
  ['purple', 'teal'],
  ['orange', 'green'],
];
 
export default function BoxConnections() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const boxRefs = useRef<Record<string, HTMLDivElement | null>>({});
 
  const signum = (x: number) => (x < 0 ? -1 : 1);
  const absolute = (x: number) => (x < 0 ? -x : x);
 
  const drawPath = useCallback((path: SVGPathElement, startX: number, startY: number, endX: number, endY: number) => {
    const stroke = parseFloat(path.getAttribute('stroke-width') || '4');
    const svg = svgRef.current;
    if (!svg) return;
 
    if (svg.height.baseVal.value < endY) svg.setAttribute('height', `${endY}`);
    if (svg.width.baseVal.value < startX + stroke) svg.setAttribute('width', `${startX + stroke}`);
    if (svg.width.baseVal.value < endX + stroke) svg.setAttribute('width', `${endX + stroke}`);
 
    const deltaX = (endX - startX) * 0.15;
    const deltaY = (endY - startY) * 0.15;
    const delta = deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);
 
    let arc1 = 0,
      arc2 = 1;
    if (startX > endX) {
      arc1 = 1;
      arc2 = 0;
    }
 
    const d = [
      `M${startX} ${startY}`,
      `V${startY + delta}`,
      `A${delta} ${delta} 0 0 ${arc1} ${startX + delta * signum(deltaX)} ${startY + 2 * delta}`,
      `H${endX - delta * signum(deltaX)}`,
      `A${delta} ${delta} 0 0 ${arc2} ${endX} ${startY + 3 * delta}`,
      `V${endY}`,
    ].join(' ');
 
    path.setAttribute('d', d);
  }, []);
 
  const connectElements = useCallback(
    (path: SVGPathElement, startElem: HTMLDivElement, endElem: HTMLDivElement) => {
      const svgContainer = svgRef.current?.parentElement;
      if (!svgContainer) return;
 
      let sElem = startElem;
      let eElem = endElem;
 
      if (sElem.offsetTop > eElem.offsetTop) {
        [sElem, eElem] = [eElem, sElem];
      }
 
      const svgTop = svgContainer.offsetTop;
      const svgLeft = svgContainer.offsetLeft;
 
      const startRect = sElem.getBoundingClientRect();
      const endRect = eElem.getBoundingClientRect();
 
      const startX = startRect.left + 0.5 * sElem.offsetWidth - svgLeft;
      const startY = startRect.top + sElem.offsetHeight - svgTop;
      const endX = endRect.left + 0.5 * eElem.offsetWidth - svgLeft;
      const endY = endRect.top - svgTop;
 
      drawPath(path, startX, startY, endX, endY);
    },
    [drawPath]
  );
 
  const connectAll = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
 
    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
 
    const paths = svg.querySelectorAll('path');
    connections.forEach(([from, to], index) => {
      const start = boxRefs.current[from];
      const end = boxRefs.current[to];
      if (start && end && paths[index]) connectElements(paths[index], start, end);
    });
  }, [connectElements]);
 
  useEffect(() => {
    connectAll();
 
    const svg = svgRef.current;
    if (!svg) return;
 
    const paths = Array.from(svg.querySelectorAll('path'));
    paths.forEach((p) => {
      p.style.transition = 'none';
      p.style.strokeDasharray = `${p.getTotalLength()}`;
      p.style.strokeDashoffset = `${p.getTotalLength()}`;
      p.style.opacity = '0';
    });
 
    let i = 0;
    const animateNext = () => {
      if (i >= paths.length) {
        i = 0; // Reset to loop animation
        setTimeout(animateNext, 600); // Delay before restarting
        return;
      }
 
      const path = paths[i];
      const endBoxId = connections[i][1];
      path.style.opacity = '1';
      path.style.transition = 'stroke-dashoffset 1.2s ease-out, opacity 0.5s ease';
      path.style.strokeDashoffset = '0';
 
      // Pulse target box
      setTimeout(() => {
        const box = boxRefs.current[endBoxId];
        if (box) {
          box.style.transition = 'transform 0.3s ease';
          box.style.transform = 'scale(1.2)';
          setTimeout(() => (box.style.transform = 'scale(1)'), 300);
        }
      }, 1000);
 
      // Fade out this line before next starts
      setTimeout(() => {
        path.style.transition = 'opacity 0.6s ease';
        path.style.opacity = '0';
        i++;
        setTimeout(animateNext, 600); // start next after fade out
      }, 1600);
    };
 
    animateNext();
  }, [connectAll]);
 
  useEffect(() => {
    window.addEventListener('resize', connectAll);
    return () => window.removeEventListener('resize', connectAll);
  }, [connectAll]);
 
  return (
    <div style={{ position: 'relative', fontSize: '1.5vh', opacity: 0.8 }}>
      {/* SVG layer */}
      <div id="svgContainer" style={{ position: 'absolute', zIndex: -10, opacity: 0.7 }}>
        <svg ref={svgRef} width="0" height="0">
          <defs>
            {/* animated gradient definition */}
            <linearGradient id="gradLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f">
                <animate attributeName="stop-color" values="#00f;#0ff;#0f0;#00f" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#0f0">
                <animate attributeName="stop-color" values="#0f0;#ff0;#f0f;#0f0" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
 
          {connections.map((_, i) => (
            <path
              key={i}
              stroke="url(#gradLine)"
              fill="none"
              strokeWidth={i === 2 ? 5 : i === 4 ? 8 : 6}
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
 
      {/* Boxes */}
      <div id="outer" style={{ width: '80%', margin: '0 auto' }}>
        {boxes.map((b) => (
          <div
            key={b.id}
            id={b.id}
            ref={(el) => { boxRefs.current[b.id] = el; }}
            style={{
              backgroundColor: b.color,
              opacity: 0.85,
              borderRadius: '0.5em',
              transition: 'transform 0.3s ease',
              ...b.style,
            }}
          />
        ))}
      </div>
    </div>
  );
}
 
 