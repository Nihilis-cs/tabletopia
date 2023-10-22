'use client'
import Notes from "@/components/Notes";
import Dice from "../components/Dice";
import PlayerSheet from "@/components/PlayerSheet";

function Home() {

    return (
        <div className='flex-grow h-full'>
            <div className='w-full h-full overflow-auto dark:text-slate-200'>
                <div className="grid gap-3 h-max">
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

export default Home;