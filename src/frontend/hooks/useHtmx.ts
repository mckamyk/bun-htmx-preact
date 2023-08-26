import type Htmx from 'htmx.org';
import { useEffect, useRef } from 'preact/hooks';

declare global {
  interface Window {htmx: typeof Htmx}
}

export const useHtmx = () => {
  const ref = useRef<any>(null)
  
  useEffect(() => {
    if (ref.current) window.htmx.process(ref.current)
  }, [ref.current])

  return ref
}
