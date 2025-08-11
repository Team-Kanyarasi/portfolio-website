import { notFound } from "next/navigation";
import { CustomMDX } from "@/components";
import { Meta, Column, Heading, Row } from "@once-ui-system/core";
import { teamMembers } from "@/resources";
import { getPosts } from "@/utils/utils"; // Changed from readMDXFile
import { Metadata } from 'next';

export async function generateStaticParams() {
  const allMembersData = getPosts(['src', 'content', 'members']);
  return allMembersData.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const allMembersData = getPosts(['src', 'content', 'members']);
  const memberData = allMembersData.find((member) => member.slug === params.slug);

  if (!memberData) {
    notFound();
  }

  return Meta.generate({
    title: memberData.metadata.title,
    description: memberData.metadata.summary,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    path: `/members/${params.slug}`,
  });
}

export default async function MemberPortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const allMembersData = getPosts(['src', 'content', 'members']);
  const memberData = allMembersData.find((member) => member.slug === params.slug);

  if (!memberData) {
    notFound();
  }

  if (!memberData.content) {
    notFound();
  }

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m" />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Heading variant="display-strong-s">{memberData.metadata.title}</Heading>
          <Column as="article" fillWidth>
            <CustomMDX source={memberData.content} />
          </Column>
        </Column>
      </Row>
      <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
        {/* Add any navigation or sidebar elements here if needed */}
      </Column>
    </Row>
  );
}
