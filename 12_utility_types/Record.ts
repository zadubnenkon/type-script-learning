// Record<K, T>
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};



// Compiled code
"use strict";
const x = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};