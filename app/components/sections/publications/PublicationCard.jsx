import Link from 'next/link'
import React from 'react'

const PublicationCard = ({ publication }) => {
    return (
        <>
            <div className="group card bg-base-100 border-2 border-slate-100 hover:border-indigo-700 delay-100 ease-in-out duration-300 shadow-xl" key={publication._id}>
                <Link href={`/publications/${publication._id}`} className="px-10 pt-10">
                    <img
                        src={publication.imgurl}
                        title={publication.title}
                        alt={publication.title}
                        className="rounded-xl transition duration-300 delay-100 group-hover:scale-105" />
                </Link>
                <div className="card-body items-center text-center">
                    <h2 className="card-title transition duration-300 delay-100 group-hover:text-indigo-700">{publication.title}</h2>
                    <p>{publication.description}</p>
                </div>
            </div>
        </>
    )
}

export default PublicationCard