'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full h-[50px] mt-[-50px] flex items-center justify-between bg-[#4B4B4B] fixed z-99">
            <Link href="/" className="flex-shrink-0 ml-[140px]">
                <Image
                    src="/static/logo.png"
                    alt="Логотип"
                    width={150}
                    height={0}
                    style={{ height: 'auto' }}
                />
            </Link>

            {/*<div className="mx-6 flex-grow max-w-md">*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder="Пошук..."*/}
            {/*        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"*/}
            {/*    />*/}
            {/*</div>*/}

            <nav className="flex gap-[20px] text-sm font-medium mr-[140px]" >
                <Link href="/anime" className="no-underline text-[#ffffff]">Аніме</Link>
                <Link href="/manga" className="no-underline text-[#ffffff]">Манга</Link>
                <Link href="/about" className="no-underline text-[#ffffff]">Про нас</Link>
                <Link href="/auth/login" className="no-underline text-[#ffffff]">Увійти</Link>
            </nav>
        </header>
    );
};

export default Header;
