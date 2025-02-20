import { Geist, Geist_Mono } from 'next/font/google';

const sans = Geist({
    variable: '--font-next-sans',
    subsets: ['latin'],
});

const mono = Geist_Mono({
    variable: '--font-next-mono',
    subsets: ['latin'],
});

export { sans, mono };