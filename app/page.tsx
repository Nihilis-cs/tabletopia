import Notes from "@/components/Notes";
import Dice from "../components/Dice";
import PlayerSheet from "@/components/PlayerSheet";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/supabase";
import { cookies } from "next/headers";
import './i18n';

export default async function Home() {
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
            <div className='w-full h-full overflow-auto'>
                <div className="grid gap-3 h-max">
                    <div className="grid grid-cols-2 gap-3">
                        <Dice />
                        <Notes />
                    </div>
                    <div>
                        <PlayerSheet />
                    </div>
                </div>
            </div>
        </div>
    );
}
