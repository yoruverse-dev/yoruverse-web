import { RegisterForm } from '@/components/forms/register';
import { YoruverseIcon } from '@/components/icons';
import { SocialLogins } from '@/components/social-logins';
import * as  Card from '@/components/ui/card';

export default function Register() {
    return (
        <Card.Card className='w-96 border-0 shadow-none'>
            <Card.CardHeader className='text-center'>
                <YoruverseIcon className='size-10 mx-auto mb-4' />
                <Card.CardTitle className='text-xl font-semibold'>Discover the Yoruverse</Card.CardTitle>
                <Card.CardDescription>Join the community and start exploring</Card.CardDescription>
            </Card.CardHeader>
            <Card.CardContent>
                <SocialLogins />
            </Card.CardContent>
            <Card.CardFooter>
                <RegisterForm />
            </Card.CardFooter>
        </Card.Card>
    );
}