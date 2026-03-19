import { useEffect, useState, useRef } from "react";
import { fetchPlantImage } from "../../utils/plantImageCache";
import { BLOOM_COLOR_MAP } from "../../data/plants";

const SUN_LABELS = {
  "full-sun": "Full Sun",
  "part-shade": "Part Shade",
  "full-shade": "Full Shade",
};

const MOISTURE_LABELS = {
  dry: "Dry",
  medium: "Medium",
  moist: "Moist",
  wet: "Wet",
};

export default function PlantPopover({ plant, anchorRect, onClose, onRemove, popoverRef: externalRef, onMouseEnter, onMouseLeave }) {
  const [imageData, setImageData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const localRef = useRef(null);
  const popoverRef = externalRef ?? localRef;

  useEffect(() => {
    let cancelled = false;
    setImageLoading(true);
    fetchPlantImage(plant.scientificName).then((result) => {
      if (!cancelled) {
        setImageData(result);
        setImageLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [plant.scientificName]);

  if (!anchorRect) return null;

  const PADDING = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 640;
  // Smaller on mobile, never wider than viewport
  const POPOVER_WIDTH = Math.min(isMobile ? 250 : 300, vw - PADDING * 2);
  const MAX_HEIGHT = vh - PADDING * 2;

  // Horizontal: try right → try left → center
  let left = anchorRect.right + PADDING;
  if (left + POPOVER_WIDTH > vw - PADDING) {
    const leftSide = anchorRect.left - POPOVER_WIDTH - PADDING;
    left = leftSide >= PADDING ? leftSide : (vw - POPOVER_WIDTH) / 2;
  }
  left = Math.max(PADDING, left);

  // Vertical: align to anchor, clamp so it never goes below viewport
  let top = anchorRect.top;
  if (top + MAX_HEIGHT > vh - PADDING) {
    top = vh - MAX_HEIGHT - PADDING;
  }
  top = Math.max(PADDING, top);

  return (
    <div
      ref={popoverRef}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed z-50 bg-white border border-stone-200 rounded-xl shadow-xl overflow-y-auto overflow-x-hidden"
      style={{ width: POPOVER_WIDTH, maxHeight: MAX_HEIGHT, top, left }}
    >
      {/* Image */}
      <div className="w-full h-28 sm:h-36 bg-stone-100 relative overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-stone-400">
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
          </div>
        )}
        {!imageLoading && imageData?.imageUrl && (
          <img
            src={imageData.imageUrl}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
        )}
        {!imageLoading && !imageData?.imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
            No image available
          </div>
        )}
        {/* Close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-base leading-none transition-colors"
          >
            ×
          </button>
        )}

        {/* Bloom color chips overlaid on image */}
        {plant.bloomColors.length > 0 && (
          <div className="absolute bottom-2 right-2 flex gap-1">
            {plant.bloomColors.map((c) => (
              <span
                key={c}
                className="w-4 h-4 rounded-full border-2 border-white shadow"
                style={{ backgroundColor: BLOOM_COLOR_MAP[c] ?? c }}
                title={c}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-base font-semibold text-stone-800 leading-snug">{plant.name}</p>
        <p className="text-sm text-stone-400 italic mb-3">{plant.scientificName}</p>

        {/* Conditions row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {plant.sun.map((s) => (
            <span key={s} className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full">
              {SUN_LABELS[s]}
            </span>
          ))}
          {plant.moisture.map((m) => (
            <span key={m} className="text-xs bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-full">
              {MOISTURE_LABELS[m]}
            </span>
          ))}
          <span className="text-xs bg-stone-50 text-stone-700 border border-stone-200 px-2 py-0.5 rounded-full">
            {plant.heightMin}–{plant.heightMax}′ tall
          </span>
          {plant.spreadMin != null && (
            <span className="text-xs bg-stone-50 text-stone-700 border border-stone-200 px-2 py-0.5 rounded-full">
              {plant.spreadMin}–{plant.spreadMax}′ wide
            </span>
          )}
          {plant.spreading && (
            <span className="text-xs bg-orange-50 text-orange-700 border border-orange-200 px-2 py-0.5 rounded-full">
              Spreads
            </span>
          )}
          {plant.evergreen && (
            <span className="text-xs bg-green-50 text-green-800 border border-green-200 px-2 py-0.5 rounded-full">
              Evergreen
            </span>
          )}
        </div>

        <p className="text-sm text-stone-600 leading-relaxed mb-3">{plant.description}</p>

        {plant.wildlifeValue && (
          <div className="border-t border-stone-100 pt-3">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1">Wildlife Value</p>
            <p className="text-sm text-stone-600 leading-relaxed">{plant.wildlifeValue}</p>
          </div>
        )}

        {imageData?.attribution && (
          <p className="text-[10px] text-stone-300 mt-3 leading-tight">{imageData.attribution}</p>
        )}

        {onRemove && (
          <button
            onClick={onRemove}
            className="mt-3 w-full py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 text-xs font-medium transition-colors"
          >
            Remove from plan
          </button>
        )}
      </div>
    </div>
  );
}
