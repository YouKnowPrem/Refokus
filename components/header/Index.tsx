'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect} from 'react'
import Button from '../button/Button'
import { forwardRef } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './navbar/Index'
import Magnetic from '../magnetic/Index';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation'


const Header = forwardRef(function Index(props, ref){
    const router = useRouter();

    const data = [
        {
            title: "Home",
            link: '/'
        },
        {
            title: "Work",
            link: '/work'
        },
        {
            title: "About",
            link: '/about'
        }
    ]
    const [isActive, setIsActive] = React.useState(false)
    const pathname1 = usePathname();

    useEffect( () => {
        if(isActive) setIsActive(false)
    }, [pathname1])

    return (
        <div className='w-screen flex  justify-center'>
            <div className={`${styles.header} max-w-screen-xl mx-auto py-[1vw] px-[5vw] sm:px-[5vw] lg:px-[5vw] xl:px-0`} style={{ overflow: "hidden"}}>
                <div className='flex items-center gap-[4vw]'>
                    <Image src='/logo.svg' width={32} height={32} alt="" className='w-[20vw] sm:w-[12vw] lg:w-[8vw] xl:w-[5vw]' />
                    <div className='hidden xl:flex items-center gap-[3vw]'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className=''>
                                    <Link href={item.link}>
                                        <p className=' sm:text-[.8vw] flex items-center gap-[.3vw]'>
                                            {pathname1 === item.link && 
                                                <span style={{boxShadow:'0 0 0.25em #00FF19'}} className='inline-block w-[.3vw] h-[.3vw] rounded-full bg-comp'></span>}
                                            {item.title}
                                        </p>
                                    </Link>  
                                </div>
                            )
                        })}
                    </div>   
                </div>
                <div className='hidden'>
                    <Button />  
                </div>
                
                <Magnetic>
                    <div onClick={() => {setIsActive(!isActive)}} className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                        <div ref={ref} className={styles.bounds}></div>
                    </div>
                </Magnetic>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Navbar />}
            </AnimatePresence>
        </div>
    )
})

export default Header
