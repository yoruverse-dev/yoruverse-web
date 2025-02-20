'use client';

import { ImageMarquee } from '@/components/image-marquee';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <main className='flex items-center justify-between p-5 h-dvh'>
            <section className="grow flex flex-col gap-10 items-center justify-center size-full">
                {children}
            </section>
            <aside className='relative p-10 bg-primary/20 backdrop-blur-md size-full overflow-hidden rounded-2xl flex flex-col items-center justify-center gap-10'>
                <article>
                    <header className='text-background'>
                        <h1 className='text-5xl font-bold text-balance max-w-screen-sm'>
                            Discover plenty of new posibilities
                        </h1>
                        <p className='mt-2'>Explore the work of other creators and share your own</p>
                    </header>
                </article>
            </aside>
        </main >
    );
}