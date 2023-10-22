'use client'
import { FileAddOutlined } from '@ant-design/icons';
import { Card, Spin } from 'antd';
import { useEffect, useState } from 'react';
import SheetModelEntry, * as Sheet from "../../types/Sheet"
import axios from 'axios';
import Link from 'next/link';

export interface ISheetModelListProps {
}

export default function SheetModelList(props: ISheetModelListProps) {
  const [list, setList] = useState<SheetModelEntry[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => { getContent(); }, []);
  const getContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get<SheetModelEntry[]>('/api/sheetmodeldata');
      console.log(response);
      const data = response.data;
      console.log(data);
      setList(data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la requête GET :', error);
      setLoading(false);
    }
  }
  return (
    <div className='grid grid-cols-3 gap-3  h-full'>
      <Card className="">
        <Link href='sheetmodel/create'><FileAddOutlined size={32} /></Link>
      </Card>
      {isLoading &&
        <Spin></Spin>}
      {!isLoading &&
        list.map(item => {
          return (
            <Card className="" title={item.title} key={item.title}>
              {/* <span>Créé le {item.date.toDateString()}</span> */}
            </Card>
          );
        })
      }
    </div>
  );
}
