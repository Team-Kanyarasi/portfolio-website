import { Grid, Column, Heading } from '@once-ui-system/core'; // Added Column, Heading
import Post from './Post';

interface PostsProps {
    posts: any[]; // Added posts prop
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
    sortBy?: 'newest' | 'oldest';
    searchTerm?: string; // Added searchTerm prop
}

export function Posts({
    posts,
    range,
    columns = '1',
    thumbnail = false,
    direction,
    sortBy = 'newest',
    searchTerm = '' // Default searchTerm to empty string
}: PostsProps) {
    let allBlogs = posts;

    // Filter blogs based on searchTerm
    const filteredBlogs = allBlogs.filter(post =>
        post.metadata.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.metadata.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedBlogs = filteredBlogs.sort((a, b) => {
        const dateA = new Date(a.metadata.publishedAt).getTime();
        const dateB = new Date(b.metadata.publishedAt).getTime();
        if (sortBy === 'oldest') {
            return dateA - dateB; // Oldest first
        }
        return dateB - dateA; // Newest first (default)
    });

    const displayedBlogs = range
        ? sortedBlogs.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedBlogs.length
          )
        : sortedBlogs;

    return (
        <>
            {displayedBlogs.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedBlogs.map((post) => (
                        <Post
                            key={post.slug}
                            post={post}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
            {displayedBlogs.length === 0 && (
                <Column fillWidth horizontal="center" padding="l">
                    <Heading variant="heading-s">No blog posts found.</Heading>
                </Column>
            )}
        </>
    );
}