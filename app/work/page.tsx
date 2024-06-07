'use client'

import Header from '@/components/header/Index'
import React from 'react'
import WorkPage from '@/components/workPage'
import Cursor from "@/components/StickyCursor/Index";
import { useRef} from 'react';
import Stripes from '@/components/Stripes';
import Products from '@/components/Products';
import Marquees from '@/components/Marquees';
import Cards from '@/components/Cards';

function Work() {
    const stickyElement = useRef(null);
  return (
    <div className='w-full min-h-[100vh] relative bg-primary text-secondary overflow-hidden'>
        <Cursor stickyElement={stickyElement} />
        <Header/>
        <WorkPage/>
        <Stripes/>
        <Products/>
        <Marquees/>
        <Cards/>
    </div>
  )
}

export default Work