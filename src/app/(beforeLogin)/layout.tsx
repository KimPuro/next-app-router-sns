"use client";

import {useSelectedLayoutSegment} from "next/navigation";

export default function NavMenu() {
    const segment = useSelectedLayoutSegment();
    console.log(segment); // ['compose']
}