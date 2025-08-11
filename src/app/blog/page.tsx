import { Column, Heading, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, team, newsletter } from "@/resources";

export default function Blog() {
  const initialPosts: any[] = []; // Empty array for now since no posts exist

  return (
    <Column maxWidth="s">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: team.name, // Changed to team.name
          url: `${baseURL}/blog`,
          // Removed person.avatar as it's not applicable for a team
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>

      <Column fillWidth flex={1}>
        <Posts posts={initialPosts} searchTerm="" sortBy="newest" range={[1,1]} thumbnail direction="column"/>
        <Posts posts={initialPosts} searchTerm="" sortBy="newest" range={[2,3]} thumbnail/>
        <Posts posts={initialPosts} searchTerm="" sortBy="newest" range={[4]} columns="2"/>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
