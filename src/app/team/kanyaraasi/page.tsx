import { notFound } from "next/navigation";
import { CustomMDX } from "@/components";
import { Meta, Column, Heading, Row } from "@once-ui-system/core";
import { team } from "@/resources";
import { readMDXFile } from "@/utils/utils";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = readMDXFile(
    process.cwd() + "/src/content/team/kanyaraasi.mdx"
  );

  return Meta.generate({
    title: metadata.title,
    description: metadata.description,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    path: "/team/kanyaraasi",
  });
}

export default async function TeamKanyaraasiPage() {
  const { metadata, content } = readMDXFile(
    process.cwd() + "/src/content/team/kanyaraasi.mdx"
  );

  if (!content) {
    notFound();
  }

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m" />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Heading variant="display-strong-s">{metadata.title}</Heading>
          <Column as="article" fillWidth>
            <CustomMDX source={content} />
          </Column>
        </Column>
      </Row>
      <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
        {/* Add any navigation or sidebar elements here if needed */}
      </Column>
    </Row>
  );
}
