import { useEffect, useRef } from "react";

/**
 * Custom hook for auto-refresh functionality.
 * @param applyFn - Function to call on each refresh.
 * @param isEnabled - Whether auto-refresh is enabled.
 * @param interval - Interval in milliseconds.
 * @param isInvalid - Skip refresh if true.
 */
export function useAutoRefresh(
  applyFn: () => void,
  isEnabled: boolean,
  interval: number,
  isInvalid: boolean,
) {
  const applyRef = useRef(applyFn);

  useEffect(() => {
    applyRef.current = applyFn;
  }, [applyFn]);

  useEffect(() => {
    if (!isEnabled || interval <= 0) return;

    const id = setInterval(() => {
      if (!isInvalid) {
        applyRef.current();
      }
    }, interval);

    return () => clearInterval(id);
  }, [isEnabled, interval, isInvalid]);
}
