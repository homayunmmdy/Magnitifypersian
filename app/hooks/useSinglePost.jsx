'use client'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import APIClient from "../util/apiClient";

const useSinglePost = ({url , pathLength}) => {
    const pathname = usePathname();
    const id = pathname.slice(pathLength);
    const [post, setPost] = useState();
    const apiClient = new APIClient(url);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await apiClient.get(`/${id}`);
                setPost(postData);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    return post;
};

export default useSinglePost;

