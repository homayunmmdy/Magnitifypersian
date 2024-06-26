import React from 'react'
import Link from 'next/link';
import { FormatTime } from '../../layout';

const SubHero = ({ post }) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <>
            <Link className='flex flex-col' href={`/Posts/${post._id}`} >
                <h3 className="py-3 h-full">{post.title}</h3>
                <p className='flex justify-end'> <FormatTime timestamp={post.createdAt} options={options} /></p>
            </Link>
        </>
    )
}

export default SubHero