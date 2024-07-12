import SearchHeader from '@/components/SearchHeader';
import React from 'react';

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
