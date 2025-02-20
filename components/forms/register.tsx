'use client';

// Components
import * as Form from '../ui/form';

// Form utils
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const formSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
});

type FormData = z.infer<typeof formSchema>;

export function RegisterForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
        }
    });

    return (
        <Form.Form {...form}>
            <form className='flex flex-col gap-4 w-full'>
                <Form.FormField
                    name='username'
                    control={form.control}
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel className='capitalize'>
                                {field.name}
                            </Form.FormLabel>
                            <Form.FormControl>
                                <Input {...field} />
                            </Form.FormControl>
                        </Form.FormItem>
                    )}
                />
                <Form.FormField
                    name='password'
                    control={form.control}
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel className='capitalize'>
                                {field.name}
                            </Form.FormLabel>
                            <Form.FormControl>
                                <Input type='password' {...field} />
                            </Form.FormControl>
                        </Form.FormItem>
                    )}
                />
                <Form.FormField
                    name='password'
                    control={form.control}
                    render={({ field }) => (
                        <Form.FormItem>
                            <Form.FormLabel className='capitalize'>
                                Confirm password
                            </Form.FormLabel>
                            <Form.FormControl>
                                <Input type='password' {...field} />
                            </Form.FormControl>
                        </Form.FormItem>
                    )}
                />
                <Button type='submit' className='mt-2 cursor-pointer'>
                    Register
                </Button>
                <span className='text-sm text-center text-muted-foreground'>
                    Already have an account?{' '}
                    <Link href='/auth/login' className='text-primary font-semibold'>
                        Log in
                    </Link>
                </span>
            </form>
        </Form.Form>
    );
}