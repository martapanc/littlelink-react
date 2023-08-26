'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';
import data from '@/data/data.json';

export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme={data.defaultTheme} enableSystem={false}>
      <main id='content'>{children}</main>
    </ThemeProvider>
  );
}
