import React from 'react'
import { Button } from './ui/button'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default function SignOutButton() {
    const supabase = createServerComponentClient({ cookies });
    
    const signOut = async() => {
        const { error } = await supabase.auth.signOut()
      }
  
    return (
    <Button onClick={signOut}>SignOutButton</Button>
  )
}
