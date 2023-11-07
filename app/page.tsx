import Notes from "@/components/Notes";
import Dice from "../components/Dice";
import PlayerSheet from "@/components/PlayerSheet";
import { redirect } from "next/navigation";
import supabase from "@/lib/supabase";
import UserAvatar from "@/components/UserAvatar";

export default async function Home() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);
    if (!user) {
      redirect('/login');
    }
    return (
        <div className='flex-grow h-full'>
            <div className='w-full h-full overflow-auto dark:text-slate-200'>
                <div className="grid gap-3 h-max">
                    <UserAvatar user={user}/>
                    <div className="grid grid-cols-2 gap-3 text-white">
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
