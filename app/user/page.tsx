import { Button } from '@/components/ui/button'
import UserForm from '@/components/userprofile/UserForm'
import { Database } from '@/lib/supabase'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { LogOut } from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
// import { useTranslation } from 'react-i18next';

export default async function UserProfilePage() {
  // const { t } = useTranslation();
  const supabase = createServerComponentClient<Database>({
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className='flex-grow h-full'>
      <div className='w-full h-full overflow-auto dark:text-slate-200'>
        <div className='grid grid-cols-2 gap-3'>
          <UserForm session={session} />
          <form action="/auth/logout" method="post">
            <Button className="px-4 py-2 text-foreground mb-2" >
              <div className='pr-2'>
                <LogOut />
              </div>
              {/* {t('common:buttons.user.signOut')} */}
            </Button>
          </form>
        </div>

      </div>
    </div>
  )
}
