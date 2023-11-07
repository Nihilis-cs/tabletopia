'use client'
import { useEffect, useState } from 'react';
import SheetModelEntry, * as Sheet from "../../types/Sheet"
import axios from 'axios';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export interface ISheetModelListProps {
}

export default function SheetModelList(props: ISheetModelListProps) {
  const [list, setList] = useState<SheetModelEntry[]>([{ title: "toto" }]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => { getContent(); }, []);

  const getContent = () => {
    setLoading(true);
    axios.get<SheetModelEntry[]>('/api/sheetmodeldata').then((response) => {
      const data = response.data;
      setList(data);
      setLoading(false);

    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='grid grid-cols-3 gap-3  h-full'>
      <Card className="">
        <CardContent>
          <Link href='sheetmodel/create'><Plus /></Link>
        </CardContent>
      </Card>
      {isLoading &&
        <div>Loading...</div>}
      {list.map((item) => {
        return (
          <Card className="" key={item.title}>
            <CardHeader>{item.title}</CardHeader>
            <CardContent></CardContent>
          </Card>
        );
      })
      }
    </div>
  );
}
