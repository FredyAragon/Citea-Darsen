import { useEffect, useState } from "react";

/**
 * Controla la entrada escalonada de elementos al montar el componente.
 * Devuelve `false` -> `true` tras `delayMs`, para animar opacidad/traslación.
 */
export function useRevealOnMount(delayMs = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(id);
  }, [delayMs]);

  return visible;
}