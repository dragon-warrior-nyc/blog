import localFont from 'next/font/local';

export const katexMain = localFont({
  src: [
    {
      path: '../node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-katex-main',
});

export const katexMath = localFont({
  src: [
    {
      path: '../node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-katex-math',
});

export const katexCaligraphic = localFont({
  src: [
    {
      path: '../node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-katex-caligraphic',
});
