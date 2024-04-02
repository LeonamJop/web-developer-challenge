import { useState } from "react";
import { Feed } from "../Feed";
import { Form } from "../Form";
import { BodyContainer } from "./styles";
import { PostProps } from "../../@types/post";
import {v4 as uuid}  from 'uuid';


export function Body() {
    const [postList, setPostList] = useState<PostProps[]>([]);

    function createPost({name, message, photo}: PostProps) {
        const newPostList = [...postList]

        newPostList.push(
            {
                id: uuid(),
                name,
                message,
                photo
            }
        )

        setPostList(newPostList)
    }

    function deletePost(postIdToDelete: string) {
        const postListDeletedOne = postList.filter(post => {
            return post.id !== postIdToDelete;
        })

        setPostList(postListDeletedOne)
    }


    return(
        <BodyContainer>
            <Form onCreatPost={createPost}/>
            <Feed postList={postList} onDeletePost={deletePost}/>
        </BodyContainer>
    )
}