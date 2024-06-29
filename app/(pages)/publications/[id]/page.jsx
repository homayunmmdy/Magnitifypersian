"use client"
import { PUBLICATION_API_URL } from '@/app/config/apiConstants';
import useSinglePost from '@/app/hooks/useSinglePost';
import React from 'react'

const SinglePublicationPage = () => {
    const publication = useSinglePost(PUBLICATION_API_URL , 14);
    console.log(publication)
  return (
    <>test</>
  )
}

export default SinglePublicationPage