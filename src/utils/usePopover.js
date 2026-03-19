import { useState, useCallback, useEffect, useRef } from "react";

const isHoverDevice = () => window.matchMedia("(hover: hover)").matches;

// Module-level: only one popover open at a time
let activeCloser = null;

export function usePopover() {
  const [popover, setPopover] = useState(null);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const closeTimer = useRef(null);
  const closeRef = useRef(null);

  const close = useCallback(() => {
    clearTimeout(closeTimer.current);
    setPopover(null);
    if (activeCloser === closeRef.current) activeCloser = null;
  }, []);

  closeRef.current = close;

  const open = useCallback((plant, rect, trigger) => {
    // Close any other open popover immediately
    if (activeCloser && activeCloser !== closeRef.current) {
      activeCloser();
    }
    activeCloser = closeRef.current;
    clearTimeout(closeTimer.current);
    triggerRef.current = trigger;
    setPopover({ plant, anchorRect: rect });
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => close(), 150);
  }, [close]);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  // Click handler — touch devices only
  const onInfoClick = useCallback((plant, event) => {
    if (isHoverDevice()) return;
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    setPopover((prev) =>
      prev?.plant.id === plant.id ? null : { plant, anchorRect: rect }
    );
    triggerRef.current = event.currentTarget;
  }, []);

  // Hover handlers — pointer devices only
  const onInfoMouseEnter = useCallback((plant, event) => {
    if (!isHoverDevice()) return;
    open(plant, event.currentTarget.getBoundingClientRect(), event.currentTarget);
  }, [open]);

  const onInfoMouseLeave = useCallback(() => {
    if (!isHoverDevice()) return;
    scheduleClose();
  }, [scheduleClose]);

  const onPopoverMouseEnter = useCallback(() => {
    if (!isHoverDevice()) return;
    cancelClose();
  }, [cancelClose]);

  const onPopoverMouseLeave = useCallback(() => {
    if (!isHoverDevice()) return;
    scheduleClose();
  }, [scheduleClose]);

  // Outside click — touch devices only
  useEffect(() => {
    if (!popover || isHoverDevice()) return;
    const handler = (e) => {
      if (triggerRef.current && triggerRef.current.contains(e.target)) return;
      close();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [popover, close]);

  // Cleanup on unmount
  useEffect(() => () => {
    clearTimeout(closeTimer.current);
    if (activeCloser === closeRef.current) activeCloser = null;
  }, []);

  return {
    popover,
    popoverRef,
    onInfoClick,
    onInfoMouseEnter,
    onInfoMouseLeave,
    onPopoverMouseEnter,
    onPopoverMouseLeave,
    close,
  };
}
