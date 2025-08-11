import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, company, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  const allWorkData = getPosts(['src', 'app', 'work', 'projects']);
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: company.name,
          url: `${baseURL}${about.path}`,
          // Removed image as it's not applicable for a team
        }}
      />
      <Projects projects={allWorkData} />
    </Column>
  );
}
