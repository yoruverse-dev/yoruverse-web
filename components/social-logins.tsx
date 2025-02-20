import { DiscordIcon, GithubIcon, GoogleIcon } from './icons';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function SocialLogins() {
    return (
        <section className="flex flex-col gap-4 w-full">
            <section className='flex gap-4 justify-center *:cursor-pointer'>
                <Button variant={'outline'}>
                    <GithubIcon />
                </Button>
                <Button variant={'outline'}>
                    <GoogleIcon />
                </Button>
                <Button variant={'outline'}>
                    <DiscordIcon />
                </Button>
            </section>
            <aside className='flex items-center gap-4'>
                <Separator className='flex-1 w-full' />
                <p className='shrink-0 text-sm text-muted-foreground'>
                    or continue with password
                </p>
                <Separator className='flex-1 w-full' />
            </aside>
        </section>
    );
}