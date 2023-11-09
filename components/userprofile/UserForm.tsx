'use client'
import { useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/supabase'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { User2 } from 'lucide-react'
import { Separator } from '@radix-ui/react-separator'
import { Label } from '../ui/label'

export default function AccountForm({ session }: { session: Session }) {
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState<string | null>(null)
    const user = session.user

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)

            const { data, error, status } = await supabase
                .from('Profiles')
                .select(`username`)
                .eq('id', user!.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({
        username,
    }: {
        username: string | null
    }) {
        try {
            setLoading(true)

            const { error } = await supabase.from('Profiles').upsert({
                id: user?.id as string,
                username,
            })
            if (error) throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader className='flex flex-row items-center gap-2'>
                <User2 />
                <div className='text-lg text-secondary-foreground font-bold'>Manage profile</div>
            </CardHeader>

            <CardContent className='flex flex-col gap-2'>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id='email'
                        disabled
                        type="text"
                        value={session?.user.email || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* {session?.user.email} */}
                </div>
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
            </CardContent>
            <CardFooter className='flex flex-row justify-end'>
                <div className="mr-0">
                    <Button
                        variant='outline'
                        onClick={() => updateProfile({ username })}
                        disabled={loading}
                    >
                        {loading ? 'Loading ...' : 'Update'}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
// import { User } from '@supabase/auth-helpers-nextjs';
// import React from 'react'
// import { Card, CardContent, CardHeader } from '../ui/card';

// interface UserFormProps {
//     user: User;
// }
// export default function UserForm({user}:UserFormProps) {
//   return (

//             User profile
//         </CardHeader>
//         <CardContent>
//             <form>

//             </form>
//         </CardContent>
//     </Card>
//   )
// }
