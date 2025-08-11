"use client";

import { useState } from "react";
import { Column, Heading, Schema, Row, Button, Input } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, team, newsletter } from "@/resources";

export default function Blog({ initialPosts }: { initialPosts: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest"); // State for sorting

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

      <Row gap="8" marginBottom="l" fillWidth>
        <Input
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fillWidth
        />
        <Button
          onClick={() => setSortBy("newest")}
          variant={sortBy === "newest" ? "primary" : "tertiary"}
        >
          Newest
        </Button>
        <Button
          onClick={() => setSortBy("oldest")}
          variant={sortBy === "oldest" ? "primary" : "tertiary"}
        >
          Oldest
        </Button>
      </Row>

      <Column fillWidth flex={1}>
        {/* Pass searchTerm and sortBy to Posts component */}
        <Posts posts={initialPosts} searchTerm={searchTerm} sortBy={sortBy} range={[1,1]} thumbnail direction="column"/>
        <Posts posts={initialPosts} searchTerm={searchTerm} sortBy={sortBy} range={[2,3]} thumbnail/>
        <Posts posts={initialPosts} searchTerm={searchTerm} sortBy={sortBy} range={[4]} columns="2"/>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
