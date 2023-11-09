'use server'
import { Button } from '@/components/ui/button'
import { Database } from '@/lib/supabase';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const supabase = createServerActionClient<Database>({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div>
        <span>Already loggedIn as {user?.email} </span>
        <form action="/auth/logout" method="post">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-foreground mb-2"
          >
            Sign out
          </Button>
          
        </form>
      </div>)
  }


  return (
    <div className="flex-1 flex flex-col w-full h-full px-8 sm:max-w-md justify-center m-auto gap-2">
      <form
        action="/auth/login" method="post"
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        {/* <div className='grid grid-cols-2 gap-4'> */}
        <Button className="px-4 py-2 text-foreground mb-2">
          Login
        </Button>
        {/* </div> */}

        <Button
          variant={"outline"}
          formAction={"/auth/sign-up"}
          className="px-4 py-2 text-foreground mb-2"
        >
          Sign Up
        </Button>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  )
}
