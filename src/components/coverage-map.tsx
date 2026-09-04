type MapPanelProps = {
  title?: string;
  bbox: string;
  marker: string;
  caption: string;
  height?: string;
};

export function MapPanel({ title, bbox, marker, caption, height = "h-[420px]" }: MapPanelProps) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-panel ring-1 ring-line">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {title ?? "Live map"}
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          <span className="size-1.5 rounded-full bg-accent" /> Online
        </span>
      </div>
      <iframe
        title={title ?? "Coverage map"}
        loading="lazy"
        className={`w-full ${height} border-0 grayscale-[35%]`}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`}
      />
      <div className="border-t border-line px-5 py-3 font-mono text-[11px] text-muted">
        {caption}
      </div>
    </div>
  );
}

export const regions = [
  { name: "United Kingdom & Ireland", desk: "London", note: "Primary operations desk" },
  { name: "Western Europe", desk: "Frankfurt", note: "Travel & venue support" },
  { name: "Gulf & Levant", desk: "Dubai", note: "Executive movement" },
  { name: "East & Southern Africa", desk: "Nairobi", note: "Field response" },
  { name: "North America", desk: "New York", note: "Corporate advisory" },
  { name: "Southeast Asia", desk: "Singapore", note: "Partner network" },
];
