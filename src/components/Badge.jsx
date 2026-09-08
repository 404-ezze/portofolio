// src/components/Badge.jsx
import React from 'react';

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#e8e8ed] px-3 py-1 text-xs font-medium text-[#1d1d1f]">
      {children}
    </span>
  );
}