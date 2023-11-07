import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { supabase, type Database } from '@/lib/supabase'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  })
}