'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const Header = () => {
    const { user, loading } = useCurrentUser();
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

            <nav className="flex gap-[20px] items-center mr-[140px]" >
                <Link href="/anime" className="no-underline text-[#ffffff]">Аніме</Link>
                <Link href="/manga" className="no-underline text-[#ffffff]">Манга</Link>
                <Link href="/eula" className="no-underline text-[#ffffff]">EULA</Link>
                {!loading && !user && (
                    <Link href="/auth/login" className="no-underline text-[#ffffff]">Увійти</Link>
                )}
                {!loading && user && (
                    <Link href='/profile' className="flex items-center gap-[10px] no-underline text-[#ffffff]">
                        {user.imageUrl ? (
                            <Image src={user.imageUrl} alt={user.name} width={30} height={30} className="rounded-[10px]" />
                        ) : (
                            <span className="w-[30px] h-[30px] bg-[#000000] inline-block rounded-[10px]" />
                        )}
                        <span>{user.name}</span>
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
