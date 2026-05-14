import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

export default function Window({
  id,
  title,
  children,
  x,
  y,
  zIndex,
  minimized,
  onDragStop,
  onFocus,
  onClose,
  onToggleMinimize,
  onRestore,
  onToggleGraphiteMode,
  graphiteMode,
}) {
  const nodeRef = useRef(null);
  const isDragging = useRef(false);

  const [localPos, setLocalPos] = useState({ x, y });
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  // Sync with global state only when not dragging
  useEffect(() => {
    if (!isDragging.current && !graphiteMode) {
      setLocalPos({ x, y });
    }
  }, [x, y, graphiteMode]);

  const handleStart = () => {
    isDragging.current = true;
    if (nodeRef.current && nodeRef.current.offsetParent) {
      const parent = nodeRef.current.offsetParent;
      const width = nodeRef.current.offsetWidth;
      const height = nodeRef.current.offsetHeight;
      setBounds({
        left: 0,
        top: 0,
        right: parent.clientWidth - width,
        bottom: parent.clientHeight - height,
      });
    }
    onFocus(id);
  };

  const handleDrag = (e, data) => {
    if (!graphiteMode) {
      setLocalPos({ x: data.x, y: data.y });
    }
  };

  const handleStop = (e, data) => {
    isDragging.current = false;
    if (!graphiteMode) {
      setLocalPos({ x: data.x, y: data.y });
      onDragStop(id, data.x, data.y);
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-titlebar"
      cancel=".window-controls, .window-btn"
      position={graphiteMode ? { x: 0, y: 0 } : localPos}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
      disabled={graphiteMode} // Disable dragging in graphite mode
      bounds={bounds}
    >
      <div
        ref={nodeRef}
        className={`window window-${id} ${graphiteMode ? "graphite-mode" : ""}`}
        style={{ zIndex }}
      >
        <div
          className="window-titlebar"
          onDoubleClick={() => onRestore(id)} // Double click to restore
        >
          <div className="window-title">{title}</div>
          <div
            className="window-controls"
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <button
              className="window-btn close"
              onClick={() => onClose(id)}
              aria-label="Close"
            />
            <button
              className="window-btn minimize"
              onClick={() => onToggleMinimize(id)}
              aria-label="Minimize"
            />
            <button
              className="window-btn maximize"
              onClick={() => onToggleGraphiteMode(id)}
              aria-label="Maximize"
            />
          </div>
        </div>
        {!minimized && <div className="window-body">{children}</div>}
      </div>
    </Draggable>
  );
}
