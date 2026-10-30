import React from 'react';

export function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Languages Icons
export function CppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 5h2v2h2v2h-2v2h-2v-2h-2V9h2V7zm-7 5a6 6 0 1 1 10.24 4.24l-1.42-1.42A4 4 0 1 0 8 12a4 4 0 0 0 2.82 3.82l-1.42 1.42A6 6 0 0 1 6 12zm13 1h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2z" />
    </svg>
  );
}

export function PythonIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.91 2c-3.1 0-5.06.27-5.06 1.87v2.32h5.17v.78H4.88C3.28 6.97 2 8.35 2 11.23c0 2.62 1.15 4.19 3.06 4.31v-2.07c0-1.74 1.54-3.1 3.28-3.1h5.17V9.59H8.22c-1.33 0-2.39-1.07-2.39-2.4 0-1.32 1.06-2.4 2.39-2.4h3.69V2.78c0-.43.35-.78.78-.78h-.78zm-2.07 1.55c.43 0 .78.35.78.78 0 .43-.35.78-.78.78-.43 0-.78-.35-.78-.78 0-.43.35-.78.78-.78zm2.25 18.45c3.1 0 5.06-.27 5.06-1.87v-2.32h-5.17v-.78h7.14c1.6 0 2.88-1.38 2.88-4.26 0-2.62-1.15-4.19-3.06-4.31v2.07c0 1.74-1.54 3.1-3.28 3.1h-5.17v.78h5.29c1.33 0 2.39 1.07 2.39 2.4 0 1.32-1.06 2.4-2.39 2.4h-3.69v2c0 .43-.35.78-.78.78h.78zm2.07-1.55c-.43 0-.78-.35-.78-.78 0-.43.35-.78.78-.78.43 0 .78.35.78.78 0 .43-.35.78-.78.78z" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm13.72 13.9c.77 0 1.43-.38 1.83-1.02.13-.2.22-.44.22-.72 0-.96-.78-1.42-2.1-1.92-.95-.36-1.35-.68-1.35-1.25 0-.54.43-.93 1.15-.93.68 0 1.07.26 1.4.78l1.45-.92c-.62-.97-1.5-1.39-2.85-1.39-1.6 0-2.73.97-2.73 2.47 0 1.17.84 1.76 2.22 2.26.9.33 1.25.65 1.25 1.19 0 .61-.53 1.04-1.35 1.04-.95 0-1.54-.48-1.96-1.22l-1.48.88c.63 1.18 1.63 1.8 3.32 1.8zm-6.22-.05c.57 0 1.02-.15 1.36-.45.33-.3.49-.78.49-1.45V8.5h-1.85v6.36c0 .35-.06.59-.19.72-.13.13-.34.19-.64.19-.24 0-.45-.03-.64-.09v1.54c.4.15.9.23 1.47.23z" />
    </svg>
  );
}

export function JavaIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.86 16.03c-.22.04-.42.08-.57.14-1.48.56-.05 1.35 1.38 1.21.36-.04.74-.13 1.12-.25-.33-.35-1.12-.97-1.93-1.1zm9.32 1.32c-.46-.35-1.74-.7-3.69-.73-1.34-.02-2.39.2-3.86.6-1.58.42-3.64.44-5.22-.16-.39-.15-.72-.34-.99-.57-.45.71-.05 1.3 1.04 1.76 2.37.99 7.78.89 10.84-.28.84-.33 2.53-1.11 1.88-.62zM9.54 13.91c-1.36.19-2.37.62-2.37 1.13 0 .7 1.89 1.18 4.7 1.18 1.8 0 3.37-.2 4.19-.52.27-.11.44-.23.44-.36 0-.67-2.17-1.18-5.06-1.42-.64-.05-1.28-.05-1.9.0-.62.05-1.25.13-1.82.25l1.82-.26zM20 18.84c-3.79 1.95-12.72 1.81-16.14.07-.4-.2-.71-.43-.91-.68-.2.43-.13.88.24 1.3 1.94 2.22 8.76 2.5 13.62 1.15 1.62-.45 3.39-1.28 3.19-1.84zM10.74 9.1c.36 1.44-.4 2.87-1.72 3.19-1.31.33-2.67-.58-3.03-2.02-.36-1.44.4-2.87 1.72-3.19 1.31-.33 2.67.58 3.03 2.02z" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm7.3 10.74h-2.1v4.86H6.62v-4.86H4.53V12.2h5.77v1.54zm3.92 4.96c1.64 0 2.76-.87 2.76-2.3 0-1.3-.9-1.92-2.33-2.42-1.02-.36-1.37-.73-1.37-1.26 0-.6.48-1.02 1.25-1.02.77 0 1.25.33 1.57.87l1.37-.92c-.6-.94-1.54-1.42-2.95-1.42-1.74 0-2.85.98-2.85 2.45 0 1.24.8 1.88 2.24 2.37 1.05.37 1.44.75 1.44 1.32 0 .68-.57 1.13-1.45 1.13-1.04 0-1.63-.5-2.05-1.33l-1.37.88c.6 1.22 1.7 1.75 3.74 1.75z" />
    </svg>
  );
}

// Frameworks & Tools
export function ReactIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function NodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.15v7.7L12 19.69l6.66-3.84v-7.7L12 4.31zM12 7l4 2.31v4.62L12 16.24l-4-2.31V9.31L12 7z" />
    </svg>
  );
}

export function GitIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.62 10.45L13.55 2.38a2.18 2.18 0 0 0-3.1 0L8.38 4.45l3.29 3.29a2.58 2.58 0 0 1 3.26 3.28l3.16 3.16a2.58 2.58 0 1 1-1.55 1.53l-2.95-2.95v4.54a2.58 2.58 0 1 1-2.18 0V9.89a2.58 2.58 0 0 1-1.38-3.37L4.45 8.38a2.18 2.18 0 0 0 0 3.1l8.07 8.07a2.18 2.18 0 0 0 3.1 0l6-6a2.18 2.18 0 0 0 0-3.1z" />
    </svg>
  );
}

// Core CS Concept Icons
export function DsaIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="3" />
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="10.5" y1="7.5" x2="7.5" y2="16.5" />
      <line x1="13.5" y1="7.5" x2="16.5" y2="16.5" />
    </svg>
  );
}

export function OopIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export function DbmsIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function OsIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}
