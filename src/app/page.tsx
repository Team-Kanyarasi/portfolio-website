import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, company, newsletter, baseURL, routes, services, testimonials } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { getPosts } from "@/utils/utils";

export default async function Home() {
  const allWorkData = getPosts(['src', 'app', 'work', 'projects']);
  const allBlogData = getPosts(['src', 'app', 'blog', 'posts']);
  return (
    <Column maxWidth="m" gap="xl" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: company.name,
          url: `${baseURL}${about.path}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column fillWidth horizontal="center">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Flex gap="m" wrap>
              <Button
                href={home.cta.primary.href}
                variant="primary"
                size="l"
                weight="default"
              >
                {home.cta.primary.text}
              </Button>
              <Button
                href={home.cta.secondary.href}
                variant="secondary"
                size="l"
                weight="default"
                arrowIcon
              >
                {home.cta.secondary.text}
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Column>
      {/* Services Overview */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="l" paddingY="xl">
          <Column fillWidth horizontal="center">
            <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
              What We Build
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              Professional software solutions tailored to your business needs
            </Text>
          </Column>
          
          <Row gap="l" fillWidth wrap>
            {services.offerings.slice(0, 4).map((service, index) => (
              <Column key={index} flex={1} gap="s" minWidth="200" paddingX="m" paddingY="l" 
                     border="neutral-medium" borderStyle="solid-1" radius="l">
                <Heading variant="heading-strong-s" color="neutral-on-background-strong">
                  {service.title}
                </Heading>
                <Text variant="body-default-s" color="neutral-on-background-weak">
                  {service.description}
                </Text>
                <Text variant="body-default-xs" color="neutral-on-background-medium" style={{ fontStyle: 'italic', marginTop: '8px' }}>
                  {service.portfolio}
                </Text>
              </Column>
            ))}
          </Row>
          
          <Column horizontal="center" paddingTop="m">
            <Button href="/services" variant="tertiary" size="l" arrowIcon>
              View All Services
            </Button>
          </Column>
        </Column>
      </RevealFx>
      
      {/* Featured Projects */}
      <RevealFx translateY="16" delay={0.8}>
        <Projects projects={allWorkData} range={[1, 2]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts posts={allBlogData} range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      {/* Testimonials */}
      {testimonials.display && (
        <RevealFx translateY="16" delay={1.0}>
          <Column fillWidth gap="l" paddingY="xl">
            <Column maxWidth="s" fillWidth horizontal="center">
              <Heading as="h2" variant="display-strong-s" align="center">
                {testimonials.title}
              </Heading>
            </Column>
            
            <Row gap="l" fillWidth wrap>
              {testimonials.reviews.map((review, index) => (
                <Column key={index} flex={1} gap="m" minWidth="280" paddingX="l" paddingY="xl" 
                       border="neutral-medium" borderStyle="solid-1" radius="l" background="neutral-background-weak">
                  <Text variant="body-default-m" color="neutral-on-background-strong" wrap="balance">
                    "{review.content}"
                  </Text>
                  <Column gap="xs">
                    <Text variant="label-default-s" color="brand-on-background-strong">
                      {review.name}
                    </Text>
                    <Text variant="body-default-xs" color="neutral-on-background-weak">
                      {review.role}
                    </Text>
                  </Column>
                </Column>
              ))}
            </Row>
          </Column>
        </RevealFx>
      )}
      
      {/* More Projects */}
      <Projects projects={allWorkData} range={[3]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
