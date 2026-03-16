import { useState, useRef, useEffect } from "react";

export default function GroupTabs({ groups, activeGroupId, onSelect, onAdd, onRename, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingId && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editingId]);

  const startEdit = (group, e) => {
    e.stopPropagation();
    setEditingId(group.id);
    setEditValue(group.name);
  };

  const commitEdit = () => {
    if (editingId) {
      onRename(editingId, editValue.trim() || "Untitled Group");
      setEditingId(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") commitEdit();
    if (e.key === "Escape") setEditingId(null);
  };

  return (
    <div className="no-print flex items-center gap-1 mb-3 border-b border-stone-200 pb-0">
      {groups.map((group) => {
        const isActive = group.id === activeGroupId;
        return (
          <div
            key={group.id}
            onClick={() => onSelect(group.id)}
            className={`group/tab relative flex items-center gap-1.5 px-3 py-2 rounded-t-lg border border-b-0 cursor-pointer transition-colors select-none ${
              isActive
                ? "bg-white border-stone-200 text-stone-800 -mb-px z-10"
                : "bg-stone-100 border-transparent text-stone-500 hover:bg-stone-50 hover:text-stone-700"
            }`}
          >
            {editingId === group.id ? (
              <input
                ref={inputRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={handleKeyDown}
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium bg-transparent outline-none border-b border-green-500 w-32"
              />
            ) : (
              <span
                className="text-sm font-medium"
                onDoubleClick={(e) => startEdit(group, e)}
                title="Double-click to rename"
              >
                {group.name}
              </span>
            )}

            {group.planIds.length > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                isActive ? "bg-green-100 text-green-700" : "bg-stone-200 text-stone-500"
              }`}>
                {group.planIds.length}
              </span>
            )}

            {/* Rename button — visible on hover when active */}
            {isActive && editingId !== group.id && (
              <button
                onClick={(e) => startEdit(group, e)}
                className="opacity-0 group-hover/tab:opacity-100 text-stone-400 hover:text-stone-600 transition-opacity text-base leading-none"
                title="Rename group"
              >
                ✎
              </button>
            )}

            {/* Delete button — only shown when more than 1 group */}
            {groups.length > 1 && isActive && (
              <button
                onClick={(e) => { e.stopPropagation(); onDelete(group.id); }}
                className="opacity-0 group-hover/tab:opacity-100 ml-0.5 text-stone-400 hover:text-red-500 transition-all text-lg leading-none"
                title="Delete group"
              >
                ×
              </button>
            )}
          </div>
        );
      })}

      {/* Add new group */}
      <button
        onClick={onAdd}
        className="flex items-center gap-1 px-3 py-2 text-sm text-stone-400 hover:text-green-700 hover:bg-stone-50 rounded-t-lg transition-colors"
        title="Add group"
      >
        <span className="text-base leading-none">+</span>
        <span>New Group</span>
      </button>
    </div>
  );
}
