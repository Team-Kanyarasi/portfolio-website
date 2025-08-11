import { Flex, Heading, Text, Button, Grid, Card, Icon } from "@once-ui-system/core";
import { services, contact } from "@/resources/content";

export async function generateMetadata() {
  return {
    title: services.title,
    description: services.description,
  };
}

export default function Services() {
  return (
    <Flex direction="column" fillWidth paddingTop="l" paddingX="l" gap="xl">
      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="display-strong-s" color="neutral-on-background-strong">
          {services.title}
        </Heading>
        <Text variant="body-default-l" color="neutral-on-background-weak">
          {services.description}
        </Text>
      </Flex>

      <Grid columns="1" tabletColumns="2" desktopColumns="2" fillWidth gap="l">
        {services.offerings.map((service, index) => (
          <Card
            key={index}
            padding="xl"
            fillWidth
            border="neutral-medium"
            borderStyle="solid-1"
            radius="l"
          >
            <Flex direction="column" gap="m" fillWidth>
              <Flex direction="column" gap="xs">
                <Heading variant="heading-strong-m" color="neutral-on-background-strong">
                  {service.title}
                </Heading>
                <Text variant="body-default-m" color="neutral-on-background-weak">
                  {service.description}
                </Text>
              </Flex>

              <Flex direction="column" gap="xs">
                {service.features.map((feature, featureIndex) => (
                  <Flex key={featureIndex} alignItems="center" gap="xs">
                    <Icon name="check" size="s" color="brand-on-background-strong" />
                    <Text variant="body-default-s" color="neutral-on-background-medium">
                      {feature}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              <Flex direction="column" gap="xs">
                <Text variant="body-default-s" color="neutral-on-background-medium" style={{ fontStyle: 'italic' }}>
                  {service.portfolio}
                </Text>
                <Button
                  href="/work"
                  variant="tertiary"
                  size="s"
                  suffixIcon="chevronRight"
                >
                  View Portfolio
                </Button>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Grid>

      <Card
        padding="xl"
        fillWidth
        border="brand-medium"
        borderStyle="solid-1"
        radius="l"
        background="brand-background-weak"
      >
        <Flex direction="column" gap="l" fillWidth>
          <Flex direction="column" gap="xs">
            <Heading variant="heading-strong-l" color="brand-on-background-strong">
              Ready to Start Your Project?
            </Heading>
            <Text variant="body-default-l" color="brand-on-background-medium">
              Get a free consultation for your project. We'll discuss your requirements, timeline, and how we can help bring your vision to life.
            </Text>
          </Flex>
          
          <Flex direction="row" gap="m" wrap>
            <Button
              href="/contact"
              variant="primary"
              size="l"
            >
              Get Started
            </Button>
            <Button
              href="/work"
              variant="secondary"
              size="l"
            >
              View Our Work
            </Button>
          </Flex>
        </Flex>
      </Card>

      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="heading-strong-l" color="neutral-on-background-strong">
          Why Choose DevOtaku?
        </Heading>
        <Grid columns="1" tabletColumns="2" desktopColumns="3" fillWidth gap="m">
          <Flex direction="column" gap="xs">
            <Icon name="code" size="l" color="brand-on-background-strong" />
            <Heading variant="heading-strong-s" color="neutral-on-background-strong">
              Modern Technology
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak">
              We use the latest technologies and frameworks to build fast, secure, and scalable solutions.
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Icon name="zap" size="l" color="brand-on-background-strong" />
            <Heading variant="heading-strong-s" color="neutral-on-background-strong">
              Fast Delivery
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak">
              Agile development process ensures quick turnaround times without compromising quality.
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Icon name="shield" size="l" color="brand-on-background-strong" />
            <Heading variant="heading-strong-s" color="neutral-on-background-strong">
              Stockholm Based
            </Heading>
            <Text variant="body-default-s" color="neutral-on-background-weak">
              Local expertise with global reach, operating in the CET timezone for European clients.
            </Text>
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}