'use client'
import {
  useQuery,

} from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import { SheetModelEntry } from "../../types/Sheet";
import { Skeleton } from "@/components/ui/skeleton"
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import CreateSheetModelModal from '@/components/sheetmodels/CreateSheetModelModal';
import { PenSquare, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { sheetmodelkeys, sheetmodelqueries } from '@/services/sheetmodelqueries';

export interface ISheetModelListProps {
}

export default function SheetModelList(props: ISheetModelListProps) {
  //const [list, setList] = useState<SheetModelEntry[]>([]);
  //const [isLoading, setLoading] = useState<boolean>(true);

  //useEffect(() => { getContent(); }, []);

  const useSheetModel = () => {
    return useQuery<SheetModelEntry[]>({
      queryKey: sheetmodelkeys.listAll(),
      queryFn: async () => {
        const vRet = await sheetmodelqueries.listAll();
        return vRet;
      }
    });
  };
  const { isLoading, data: list, refetch } = useSheetModel();

  // const getContent = async () => {
  //   setLoading(true);
  //   var vRes = await axios.get<SheetModelEntry[]>('/api/sheetmodel/list');
  //   const data = vRes.data;
  //   console.log(data);
  //   setList(data);
  //   setLoading(false);
  // }

  const getPathName = (id: string) => {
    return "sheetmodel/" + id;
  }

  return (
    <div className='flex flex-col gap-3' >
      <CreateSheetModelModal />


      <div className='grid grid-cols-3 gap-3  h-full'>
        {isLoading &&
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>}
        {list && list.map((item) => {
          return (
            <Card className="border border-primary-foreground" key={item.id} >
              <CardHeader>{item.name}</CardHeader>
              <CardDescription></CardDescription>
              <CardContent>

              </CardContent>
              <CardFooter className='flex flex-row justify-end'>
                <div className="mr-0 flex flex-row gap-2">
                  <Link href={getPathName(item.id)}>
                    <Button variant={"outline"}>
                      <PenSquare />
                    </Button>
                  </Link>
                  <Button variant={"outline"} >
                    <Trash2 />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })
        }
      </div>
    </div >
  );
}
