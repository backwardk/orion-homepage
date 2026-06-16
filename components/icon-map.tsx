import {
  BookOpen,
  Camera,
  Code2,
  Github,
  Instagram,
  Mail,
  Map,
  Music2,
  Palette,
  PenLine
} from "lucide-react";
import type { ContactLink, Interest } from "@/types/content";

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

export function InterestIcon({ icon, className }: { icon: Interest["icon"]; className?: string }) {
  const props: IconProps = { className, strokeWidth: 1.6 };

  switch (icon) {
    case "book":
      return <BookOpen {...props} />;
    case "map":
      return <Map {...props} />;
    case "code":
      return <Code2 {...props} />;
    case "camera":
      return <Camera {...props} />;
    case "pen":
      return <PenLine {...props} />;
    case "palette":
      return <Palette {...props} />;
    case "music":
      return <Music2 {...props} />;
  }
}

export function ContactIcon({ icon, className }: { icon: ContactLink["icon"]; className?: string }) {
  const props: IconProps = { className, strokeWidth: 1.6 };

  switch (icon) {
    case "mail":
      return <Mail {...props} />;
    case "github":
      return <Github {...props} />;
    case "instagram":
      return <Instagram {...props} />;
  }
}
