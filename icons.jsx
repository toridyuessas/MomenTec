// MomenTec — inline SVG icon set. Simple, lucide-inspired strokes.

const Icon = ({ children, size = 20, stroke = 1.6 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const IconPhone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></Icon>;
const IconMessage = (p) => <Icon {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></Icon>;
const IconCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IconPin = (p) => <Icon {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></Icon>;
const IconArrowRight = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const IconPlus = (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
const IconClose = (p) => <Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>;

// Why-card icons
const IconHouse = (p) => <Icon {...p}><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"/></Icon>;
const IconYen = (p) => <Icon {...p}><path d="M5 4l7 9 7-9"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="6" y1="15" x2="18" y2="15"/><line x1="6" y1="19" x2="18" y2="19"/></Icon>;
const IconHandshake = (p) => <Icon {...p}><path d="M5 11l3-3 4 4 4-4 3 3"/><path d="M12 12l4 4 3-3"/><path d="M3 13l5 5 3-3"/></Icon>;

// Service icons
const IconAC = (p) => <Icon {...p}><rect x="2" y="5" width="20" height="9" rx="2"/><line x1="6" y1="9" x2="18" y2="9"/><path d="M7 17l-1 4"/><path d="M12 17v4"/><path d="M17 17l1 4"/></Icon>;
const IconDrops = (p) => <Icon {...p}><path d="M12 3c-1.5 3-5 6-5 9.5a5 5 0 0 0 10 0C17 9 13.5 6 12 3z"/></Icon>;
const IconSun = (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="7" y2="7"/><line x1="17" y1="17" x2="19" y2="19"/><line x1="5" y1="19" x2="7" y2="17"/><line x1="17" y1="7" x2="19" y2="5"/></Icon>;

// Other service icons
const IconWrench = (p) => <Icon {...p}><path d="M14.7 6.3a4 4 0 1 0 5 5l-7 7a3 3 0 0 1-4-4l6-8z"/></Icon>;
const IconBolt = (p) => <Icon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>;
const IconTool = (p) => <Icon {...p}><path d="M14.7 6.3a4 4 0 1 0 5 5l-7 7a3 3 0 0 1-4-4l6-8z"/><path d="M3 21l4-4"/></Icon>;
const IconBox = (p) => <Icon {...p}><path d="M21 8 12 3 3 8l9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="21"/></Icon>;

// Flow icons
const IconClipboard = (p) => <Icon {...p}><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="15" y2="14"/></Icon>;
const IconHammer = (p) => <Icon {...p}><path d="M14 4l6 6-2 2-6-6 2-2z"/><path d="M12 6 3 15v6h6l9-9"/></Icon>;

window.MIcons = {
  IconPhone, IconMessage, IconCheck, IconPin, IconArrowRight, IconPlus, IconClose,
  IconHouse, IconYen, IconHandshake,
  IconAC, IconDrops, IconSun,
  IconWrench, IconBolt, IconTool, IconBox,
  IconClipboard, IconHammer,
};
