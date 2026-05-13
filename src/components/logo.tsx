import { TvMinimalPlayIcon } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center  gap-2">
      <TvMinimalPlayIcon className="size-6 text-primary" />
      <div className="flex flex-col items-start">
        <span className="text-xl font-bold text-primary  ">IPTV Tauri</span>
        <span className="text-muted-foreground text-xs ">
          A Tauri App for IPTV
        </span>
      </div>
    </div>
  );
}
