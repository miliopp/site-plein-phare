'use client';

import { useEffect, useRef } from 'react';


export default function Embed({ html }: { html: string }) {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current && html.trim()) {
          containerRef.current.innerHTML = html;
        }
      }, [html]);

      return <div ref={containerRef} />;
  
}
