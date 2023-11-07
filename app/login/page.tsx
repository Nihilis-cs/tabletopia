'use server'
import { Button } from '@/components/ui/button'
import supabase from '@/lib/supabase';

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user)
  {
    return <span>Already loggedIn as {user?.email} </span>
  }


  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
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
