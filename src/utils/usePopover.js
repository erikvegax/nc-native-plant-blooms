import { useState, useCallback, useEffect, useRef } from "react";

export function usePopover() {
  const [popover, setPopover] = useState(null); // { plant, anchorRect }
  const triggerRef = useRef(null);

  const onInfoClick = useCallback((plant, event) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setPopover((prev) =>
      prev?.plant.id === plant.id ? null : { plant, anchorRect: rect }
    );
    triggerRef.current = event.currentTarget;
  }, []);

  const close = useCallback(() => setPopover(null), []);

  // Close on any outside click
  useEffect(() => {
    if (!popover) return;
    const handler = (e) => {
      if (triggerRef.current && triggerRef.current.contains(e.target)) return;
      setPopover(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popover]);

  return { popover, onInfoClick, close };
}
