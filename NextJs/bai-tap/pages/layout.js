import Link from "next/link";
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
            {children}
        </div>
    );
}

export default Layout;