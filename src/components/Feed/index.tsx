import { FeedContainer } from "./styles";
import { PostProps } from "../../@types/post";
import { PostCard } from "./PostCard";

interface PostListProps {
    postList: PostProps[];
    onDeletePost: (post: string) => void;
}

export function Feed({postList, onDeletePost}: PostListProps) {

    return (
        <FeedContainer>
            <h1>Feed</h1>

            {postList.length > 0 && (
                postList.map((post: PostProps) => {
                    return(
                        <PostCard
                            key={post.id}
                            id={post.id!}
                            name={post.name}
                            message={post.message}
                            photo={post.photo!}
                            onDelete={onDeletePost}
                        />
                    )
                })
            )}
        </FeedContainer>
    )
}