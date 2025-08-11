import { Flex, Heading, Text, Button, Grid, Card, Avatar, Badge, Icon } from "@once-ui-system/core";
import { company } from "@/resources/content";
import { TeamModal } from "@/components/team/TeamModal";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return {
    title: `Meet Our Team - ${company.name}`,
    description: `Meet the talented developers and designers behind ${company.name}. Our Stockholm-based team brings together diverse expertise in modern web development, AI, and software engineering.`,
  };
}

export default function Team() {
  // Get team members from MDX files
  const teamMembersData = getPosts(['src', 'content', 'members']);
  
  // Transform MDX data to match TeamModal interface
  const teamMembers = teamMembersData.map((member) => ({
    name: member.metadata.name || member.metadata.title,
    role: member.metadata.role || 'Team Member',
    slug: member.slug,
    avatar: member.metadata.avatar || `/images/avatars/${member.slug}.jpg`,
    skills: member.metadata.skills || [],
    bio: member.metadata.bio || member.metadata.description || '',
    social: {
      github: member.metadata.github,
      linkedin: member.metadata.linkedin,
    }
  }));

  return (
    <Flex direction="column" fillWidth paddingTop="l" paddingX="l" gap="xl">
      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="display-strong-s" color="neutral-on-background-strong">
          Meet Our Team
        </Heading>
        <Text variant="body-default-l" color="neutral-on-background-weak" maxWidth="640">
          Our diverse team of developers, designers, and technology experts work together to deliver exceptional software solutions. Based in Stockholm, we combine local expertise with global perspectives.
        </Text>
      </Flex>

      <TeamModal teamMembers={teamMembers} />

      <Card
        padding="xl"
        fillWidth
        border="brand-medium"
        borderStyle="solid"
        radius="l"
        background="brand-weak"
      >
        <Flex direction="column" gap="l" fillWidth align="center">
          <Flex direction="column" gap="xs" align="center">
            <Heading variant="heading-strong-l" color="brand-on-background-strong">
              Want to Work With Us?
            </Heading>
            <Text variant="body-default-l" color="brand-on-background-medium" align="center">
              Our team is ready to help you build something amazing. Get in touch to discuss your project.
            </Text>
          </Flex>
          
          <Flex direction="row" gap="m" wrap>
            <Button
              href="/contact"
              variant="primary"
              size="l"
            >
              Start a Project
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="l"
            >
              View Services
            </Button>
          </Flex>
        </Flex>
      </Card>

      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="heading-strong-l" color="neutral-on-background-strong">
          Our Values
        </Heading>
        <Grid columns="1" tabletColumns="3" fillWidth gap="l">
          <Flex direction="column" gap="s" horizontal="center" align="center">
            <Icon name="code" size="xl" color="brand-on-background-strong" />
            <Heading variant="heading-strong-m" color="neutral-on-background-strong">
              Quality First
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak">
              We write clean, maintainable code and follow best practices to ensure long-term success.
            </Text>
          </Flex>
          <Flex direction="column" gap="s" horizontal="center" align="center">
            <Icon name="users" size="xl" color="brand-on-background-strong" />
            <Heading variant="heading-strong-m" color="neutral-on-background-strong">
              Collaboration
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak">
              We work closely with our clients as partners, ensuring transparent communication throughout.
            </Text>
          </Flex>
          <Flex direction="column" gap="s" horizontal="center" align="center">
            <Icon name="zap" size="xl" color="brand-on-background-strong" />
            <Heading variant="heading-strong-m" color="neutral-on-background-strong">
              Innovation
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak">
              We stay ahead of technology trends to deliver cutting-edge solutions that drive results.
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}