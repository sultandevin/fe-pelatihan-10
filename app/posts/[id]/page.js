import { notFound } from "next/navigation";

const DUMMY_POSTS = [
    {
        id: '1',
        title: 'Revo',
        content: 'Giganius Revo'
    },
    {
        id: '2',
        title: 'Natha',
        content: 'Giganius Natha'
    }
]

const PostPage = ({ params }) => {
    const { id } = params;
    const post = DUMMY_POSTS.find(post => post.id === id)
    if (!post) return notFound();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-sm">Post ID: {post.id}</h1>
            <h1 className="text-6xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
 
export default PostPage;