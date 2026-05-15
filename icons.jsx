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

// v1.1 additions
const IconSparkles = (p) => <Icon {...p}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M19 14l.7 1.8L21 16.5l-1.3.7L19 19l-.7-1.8L17 16.5l1.3-.7L19 14z"/><path d="M5 16l.5 1.3L7 18l-1.5.7L5 20l-.5-1.3L3 18l1.5-.7L5 16z"/></Icon>;
const IconBuilding = (p) => <Icon {...p}><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="8" x2="9" y2="8.01"/><line x1="15" y1="8" x2="15" y2="8.01"/><line x1="9" y1="12" x2="9" y2="12.01"/><line x1="15" y1="12" x2="15" y2="12.01"/><line x1="9" y1="16" x2="9" y2="16.01"/><line x1="15" y1="16" x2="15" y2="16.01"/></Icon>;
const IconLeaf = (p) => <Icon {...p}><path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-9 0 9-4 16-9 16z"/><path d="M2 22l9-9"/></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/></Icon>;
const IconChat = (p) => <Icon {...p}><path d="M21 11.5a8.5 8.5 0 0 1-13.4 6.9L3 20l1.6-4.6A8.5 8.5 0 1 1 21 11.5z"/></Icon>;
const IconFan = (p) => <Icon {...p}><circle cx="12" cy="12" r="2"/><path d="M12 2c2 3 2 6 0 10-2-4-2-7 0-10z"/><path d="M22 12c-3 2-6 2-10 0 4-2 7-2 10 0z"/><path d="M12 22c-2-3-2-6 0-10 2 4 2 7 0 10z"/><path d="M2 12c3-2 6-2 10 0-4 2-7 2-10 0z"/></Icon>;
const IconFlame = (p) => <Icon {...p}><path d="M12 22c4 0 7-3 7-7 0-4-4-7-4-11-3 2-7 5-7 11 0 4 1 7 4 7z"/><path d="M12 22c-1 0-2-1-2-3 0-2 2-3 2-5 1 2 2 3 2 5 0 2-1 3-2 3z"/></Icon>;
const IconWash = (p) => <Icon {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="14" r="4"/><line x1="8" y1="7" x2="8" y2="7.01"/><line x1="12" y1="7" x2="16" y2="7"/></Icon>;
const IconBulb = (p) => <Icon {...p}><path d="M9 18h6"/><path d="M10 21h4"/><path d="M8 14a5 5 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3z"/></Icon>;
const IconScissors = (p) => <Icon {...p}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></Icon>;
const IconGear = (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></Icon>;
const IconCurtain = (p) => <Icon {...p}><path d="M3 4h18"/><path d="M5 4v17c2-2 3-5 3-9s-1-7-3-8z"/><path d="M19 4v17c-2-2-3-5-3-9s1-7 3-8z"/><path d="M12 4v17"/></Icon>;
const IconWall = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="1"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="3" y1="16" x2="21" y2="16"/><line x1="9" y1="4" x2="9" y2="10"/><line x1="15" y1="10" x2="15" y2="16"/><line x1="9" y1="16" x2="9" y2="20"/></Icon>;
const IconRecycle = (p) => <Icon {...p}><path d="M7 19l-3-3 3-3"/><path d="M9 5l3-3 3 3"/><path d="M19 7l3 3-3 3"/><path d="M4 16h6a4 4 0 0 0 4-4"/><path d="M20 10h-6a4 4 0 0 0-4 4"/></Icon>;
const IconAlert = (p) => <Icon {...p}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17.01"/></Icon>;

window.MIcons = {
  IconPhone, IconMessage, IconCheck, IconPin, IconArrowRight, IconPlus, IconClose,
  IconHouse, IconYen, IconHandshake,
  IconAC, IconDrops, IconSun,
  IconWrench, IconBolt, IconTool, IconBox,
  IconClipboard, IconHammer,
  IconSparkles, IconBuilding, IconLeaf, IconShield, IconChat,
  IconFan, IconFlame, IconWash, IconBulb, IconScissors, IconGear,
  IconCurtain, IconWall, IconRecycle, IconAlert,
};
