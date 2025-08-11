"use client";

import { useState } from "react";
import { Flex, Heading, Text, Button, Grid, Card, Input, Select, Textarea, Icon } from "@once-ui-system/core";
import { contact, company } from "@/resources/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <Flex direction="column" fillWidth paddingTop="l" paddingX="l" gap="xl" alignItems="center">
        <Card
          padding="xl"
          fillWidth
          maxWidth="640"
          border="brand-medium"
          borderStyle="solid-1"
          radius="l"
          background="brand-background-weak"
        >
          <Flex direction="column" gap="l" horizontal="center">
            <Icon name="check" size="xl" color="brand-on-background-strong" />
            <Heading variant="heading-strong-l" color="brand-on-background-strong" align="center">
              Thank You!
            </Heading>
            <Text variant="body-default-l" color="brand-on-background-medium" align="center">
              We've received your project inquiry and will get back to you within 24 hours to discuss your requirements and next steps.
            </Text>
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </Flex>
        </Card>
      </Flex>
    );
  }

  return (
    <Flex direction="column" fillWidth paddingTop="l" paddingX="l" gap="xl">
      <Flex direction="column" gap="m" fillWidth>
        <Heading variant="display-strong-s" color="neutral-on-background-strong">
          {contact.title}
        </Heading>
        <Text variant="body-default-l" color="neutral-on-background-weak">
          {contact.description}
        </Text>
      </Flex>

      <Grid columns="1" desktopColumns="2" fillWidth gap="xl">
        {/* Contact Form */}
        <Card
          padding="xl"
          fillWidth
          border="neutral-medium"
          borderStyle="solid-1"
          radius="l"
        >
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="l" fillWidth>
              <Heading variant="heading-strong-l" color="neutral-on-background-strong">
                Start Your Project
              </Heading>
              
              <Grid columns="1" tabletColumns="2" fillWidth gap="m">
                <Input
                  name="name"
                  label="Full Name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Input
                name="company"
                label="Company (Optional)"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
              />

              <Grid columns="1" tabletColumns="2" fillWidth gap="m">
                <Select
                  name="projectType"
                  label="Project Type"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="ai-agent">AI Agent Development</option>
                  <option value="mcp-agent">MCP Agent Development</option>
                  <option value="full-stack">Full-Stack Solution</option>
                  <option value="consulting">Consulting & Strategy</option>
                  <option value="other">Other</option>
                </Select>

                <Select
                  name="budget"
                  label="Budget Range (EUR)"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under €5,000</option>
                  <option value="5k-15k">€5,000 - €15,000</option>
                  <option value="15k-30k">€15,000 - €30,000</option>
                  <option value="30k-50k">€30,000 - €50,000</option>
                  <option value="over-50k">Over €50,000</option>
                </Select>
              </Grid>

              <Select
                name="timeline"
                label="Desired Timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (Rush project)</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </Select>

              <Textarea
                name="description"
                label="Project Description"
                placeholder="Tell us about your project, requirements, and any specific features you need..."
                rows={6}
                value={formData.description}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="l"
                fillWidth
                loading={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </Flex>
          </form>
        </Card>

        {/* Contact Information */}
        <Flex direction="column" gap="l">
          <Card
            padding="xl"
            fillWidth
            border="neutral-medium"
            borderStyle="solid-1"
            radius="l"
          >
            <Flex direction="column" gap="l" fillWidth>
              <Heading variant="heading-strong-l" color="neutral-on-background-strong">
                Contact Information
              </Heading>
              
              <Flex direction="column" gap="m">
                <Flex alignItems="center" gap="m">
                  <Icon name="mail" size="m" color="brand-on-background-strong" />
                  <Flex direction="column" gap="xs">
                    <Text variant="label-default-s" color="neutral-on-background-weak">
                      Email
                    </Text>
                    <Text variant="body-default-m" color="neutral-on-background-strong">
                      {contact.info.email}
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="center" gap="m">
                  <Icon name="phone" size="m" color="brand-on-background-strong" />
                  <Flex direction="column" gap="xs">
                    <Text variant="label-default-s" color="neutral-on-background-weak">
                      Phone
                    </Text>
                    <Text variant="body-default-m" color="neutral-on-background-strong">
                      {contact.info.phone}
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="center" gap="m">
                  <Icon name="mapPin" size="m" color="brand-on-background-strong" />
                  <Flex direction="column" gap="xs">
                    <Text variant="label-default-s" color="neutral-on-background-weak">
                      Location
                    </Text>
                    <Text variant="body-default-m" color="neutral-on-background-strong">
                      {contact.info.location}
                    </Text>
                  </Flex>
                </Flex>

                <Flex alignItems="center" gap="m">
                  <Icon name="clock" size="m" color="brand-on-background-strong" />
                  <Flex direction="column" gap="xs">
                    <Text variant="label-default-s" color="neutral-on-background-weak">
                      Timezone
                    </Text>
                    <Text variant="body-default-m" color="neutral-on-background-strong">
                      {contact.info.timezone}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          <Card
            padding="xl"
            fillWidth
            border="neutral-medium"
            borderStyle="solid-1"
            radius="l"
          >
            <Flex direction="column" gap="m" fillWidth>
              <Heading variant="heading-strong-m" color="neutral-on-background-strong">
                {contact.availability.title}
              </Heading>
              <Flex direction="column" gap="xs">
                {contact.availability.schedule.map((item, index) => (
                  <Text key={index} variant="body-default-s" color="neutral-on-background-medium">
                    {item}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Card>

          <Card
            padding="xl"
            fillWidth
            border="accent-medium"
            borderStyle="solid-1"
            radius="l"
            background="accent-background-weak"
          >
            <Flex direction="column" gap="m" fillWidth>
              <Heading variant="heading-strong-m" color="accent-on-background-strong">
                Prefer to Schedule a Call?
              </Heading>
              <Text variant="body-default-s" color="accent-on-background-medium">
                Book a free 30-minute consultation to discuss your project in detail.
              </Text>
              <Button
                href="https://calendly.com/devotaku"
                variant="accent"
                size="m"
                target="_blank"
              >
                Schedule Call
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Grid>
    </Flex>
  );
}