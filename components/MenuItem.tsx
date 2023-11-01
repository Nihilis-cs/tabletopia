import { MenuEntry } from '@/types/Menu'
import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
  item: MenuEntry;
  open: boolean;
}

export default function MenuItem({ item, open }: MenuItemProps) {

  return (

    <Link href={item.href} className='flex-grow border-primary-foreground'>
      <div className={'flex flex-row gap-2 items-center p-2 border-primary-foreground hover:bg-primary-foreground rounded-md'}>
        <div className="">{item.icon}</div>
        {open && <div className="text-justify truncate">{item.label}</div>}
      </div>
    </Link>

  )
}
