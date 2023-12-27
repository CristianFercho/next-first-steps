import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Christian', 'informarción']
};

export default function AboutPage(){
    return(
        <span className="text-7xl">About Page</span>
    )
}