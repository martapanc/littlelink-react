'use client';

import { ThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';

export default function LayoutClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <main id='content'>{children}</main>
    </ThemeProvider>
  );
}
