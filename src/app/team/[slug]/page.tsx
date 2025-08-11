import { notFound } from "next/navigation";
import { Flex, Heading, Text, Button, Grid, Card, Avatar, Badge, Icon } from "@once-ui-system/core";
import { teamMembers, company } from "@/resources/content";

interface TeamMemberPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  
  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role} at ${company.name}`,
    description: `Meet ${member.name}, ${member.role} at ${company.name}. ${member.bio}`,
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  // Mock portfolio data - replace with actual data structure
  const portfolioProjects = [
    {
      title: "E-commerce Platform Redesign",
      description: "Led the complete redesign of a major e-commerce platform, improving conversion rates by 35%.",
      technologies: ["Next.js", "TypeScript", "Stripe API"],
      image: "/images/projects/ecommerce-redesign.jpg",
      link: "#"
    },
    {
      title: "AI-Powered Chat Assistant",
      description: "Developed a custom AI chat assistant that reduced customer support queries by 50%.",
      technologies: ["Python", "OpenAI API", "FastAPI"],
      image: "/images/projects/ai-assistant.jpg",
      link: "#"
    },
  ];

  return (
    <Flex direction="column" fillWidth paddingTop="l" paddingX="l" gap="xl">
      {/* Header */}
      <Card
        padding="xl"
        fillWidth
        border="neutral-medium"
        borderStyle="solid-1"
        radius="l"
        background="neutral-background-weak"
      >
        <Grid columns="1" tabletColumns="3" fillWidth gap="xl" alignItems="center">
          <Flex direction="column" alignItems="center" gap="m">
            <Avatar
              src={member.avatar}
              alt={member.name}
              size="xxl"
            />
            <Flex direction="row" gap="s">
              {member.social.github && (
                <Button
                  href={member.social.github}
                  variant="tertiary"
                  size="m"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" />
                </Button>
              )}
              {member.social.linkedin && (
                <Button
                  href={member.social.linkedin}
                  variant="tertiary"
                  size="m"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="linkedin" />
                </Button>
              )}
            </Flex>
          </Flex>
          
          <Flex direction="column" gap="m" tabletColumns="2">
            <Flex direction="column" gap="xs">
              <Heading variant="display-strong-s" color="neutral-on-background-strong">
                {member.name}
              </Heading>
              <Text variant="heading-default-m" color="brand-on-background-strong">
                {member.role}
              </Text>
              <Text variant="body-default-m" color="neutral-on-background-weak">
                {company.location}
              </Text>
            </Flex>
            
            <Text variant="body-default-l" color="neutral-on-background-medium">
              {member.bio}
            </Text>

            <Button
              href="/contact"
              variant="primary"
              size="l"
            >
              Work With Me
            </Button>
          </Flex>
        </Grid>
      </Card>

      {/* Skills */}
      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="heading-strong-l" color="neutral-on-background-strong">
          Technical Skills
        </Heading>
        <Flex wrap gap="s">
          {member.skills.map((skill, index) => (
            <Badge key={index} variant="brand-medium" size="l">
              {skill}
            </Badge>
          ))}
        </Flex>
      </Flex>

      {/* Portfolio */}
      <Flex direction="column" gap="l" fillWidth>
        <Heading variant="heading-strong-l" color="neutral-on-background-strong">
          Featured Projects
        </Heading>
        
        <Grid columns="1" tabletColumns="2" fillWidth gap="l">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              padding="l"
              fillWidth
              border="neutral-medium"
              borderStyle="solid-1"
              radius="l"
            >
              <Flex direction="column" gap="m" fillWidth>
                <Flex direction="column" gap="xs">
                  <Heading variant="heading-strong-m" color="neutral-on-background-strong">
                    {project.title}
                  </Heading>
                  <Text variant="body-default-m" color="neutral-on-background-medium">
                    {project.description}
                  </Text>
                </Flex>
                
                <Flex wrap gap="xs">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="neutral-medium">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Flex>

      {/* Experience & Education */}
      <Grid columns="1" tabletColumns="2" fillWidth gap="l">
        <Card
          padding="l"
          fillWidth
          border="neutral-medium"
          borderStyle="solid-1"
          radius="l"
        >
          <Flex direction="column" gap="m" fillWidth>
            <Heading variant="heading-strong-m" color="neutral-on-background-strong">
              Experience
            </Heading>
            <Flex direction="column" gap="s">
              <Flex direction="column" gap="xs">
                <Text variant="label-default-m" color="brand-on-background-strong">
                  {member.role}
                </Text>
                <Text variant="body-default-s" color="neutral-on-background-medium">
                  {company.name} • 2024 - Present
                </Text>
                <Text variant="body-default-s" color="neutral-on-background-weak">
                  Stockholm, Sweden
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>

        <Card
          padding="l"
          fillWidth
          border="neutral-medium"
          borderStyle="solid-1"
          radius="l"
        >
          <Flex direction="column" gap="m" fillWidth>
            <Heading variant="heading-strong-m" color="neutral-on-background-strong">
              Specializations
            </Heading>
            <Flex direction="column" gap="xs">
              <Text variant="body-default-s" color="neutral-on-background-medium">
                • Modern Web Development
              </Text>
              <Text variant="body-default-s" color="neutral-on-background-medium">
                • AI Integration & Automation
              </Text>
              <Text variant="body-default-s" color="neutral-on-background-medium">
                • Full-Stack Architecture
              </Text>
              <Text variant="body-default-s" color="neutral-on-background-medium">
                • Performance Optimization
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Grid>

      {/* CTA */}
      <Card
        padding="xl"
        fillWidth
        border="brand-medium"
        borderStyle="solid-1"
        radius="l"
        background="brand-background-weak"
      >
        <Flex direction="column" gap="l" fillWidth alignItems="center">
          <Flex direction="column" gap="xs" horizontal="center">
            <Heading variant="heading-strong-l" color="brand-on-background-strong">
              Ready to Collaborate?
            </Heading>
            <Text variant="body-default-l" color="brand-on-background-medium" align="center">
              Let's discuss your project and see how we can work together to bring your ideas to life.
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
              href="/team"
              variant="secondary"
              size="l"
            >
              Back to Team
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}