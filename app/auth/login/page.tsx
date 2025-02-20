import { LoginForm } from '@/components/forms/login';
import { YoruverseIcon } from '@/components/icons';
import { SocialLogins } from '@/components/social-logins';
import * as  Card from '@/components/ui/card';

export default function Login() {
    return (
        <Card.Card className='w-96 border-0 shadow-none'>
            <Card.CardHeader className='text-center'>
                <YoruverseIcon className='size-10 mx-auto mb-4' />
                <Card.CardTitle className='text-xl font-semibold'>Welcome back to Yoruverse</Card.CardTitle>
                <Card.CardDescription>Log in to your account and start exploring</Card.CardDescription>
            </Card.CardHeader>
            <Card.CardContent>
                <SocialLogins />
            </Card.CardContent>
            <Card.CardFooter>
                <LoginForm />
            </Card.CardFooter>
        </Card.Card>
    );
}