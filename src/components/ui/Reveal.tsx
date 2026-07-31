import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 700,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={elementRef}
      style={style}
      className={`
        reveal reveal-${direction}
        ${visible ? 'is-visible' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}