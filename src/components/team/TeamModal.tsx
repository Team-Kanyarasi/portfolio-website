'use client';

import { useState } from 'react';
import { Flex, Heading, Text, Button, Avatar, Badge, Icon } from "@once-ui-system/core";

interface TeamMember {
  name: string;
  role: string;
  slug: string;
  avatar: string;
  skills: string[];
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
  };
}

interface TeamModalProps {
  teamMembers: TeamMember[];
}

export function TeamModal({ teamMembers }: TeamModalProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      {/* Team Grid */}
      <Flex direction="row" wrap gap="l" fillWidth justifyContent="center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{ 
              cursor: 'pointer',
              minWidth: '200px',
              flex: '1 1 calc(25% - 1rem)',
              maxWidth: '280px',
              transition: 'all 0.2s ease',
              padding: '2rem',
              border: '1px solid var(--color-border-neutral-medium)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}
            onClick={() => openModal(member)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-brand-medium)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-neutral-medium)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Avatar
              src={member.avatar}
              size="xl"
            />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Heading variant="heading-strong-l" color="neutral-on-background-strong" align="center">
                {member.name}
              </Heading>
              <Text variant="body-default-m" color="brand-on-background-strong" align="center">
                {member.role}
              </Text>
            </div>
            <Text variant="body-default-s" color="neutral-on-background-weak" align="center">
              Click to learn more
            </Text>
          </div>
        ))}
      </Flex>

      {/* Custom Modal Overlay */}
      {selectedMember && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: 'var(--color-background-page)',
              borderRadius: '16px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              border: '1px solid var(--color-border-neutral-medium)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Flex direction="column" gap="xl" padding="xl">
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <Avatar
                    src={selectedMember.avatar}
                    size="l"
                  />
                  <Flex direction="column" gap="xs">
                    <Heading variant="heading-strong-xl" color="neutral-on-background-strong">
                      {selectedMember.name}
                    </Heading>
                    <Text variant="body-default-l" color="brand-on-background-strong">
                      {selectedMember.role}
                    </Text>
                  </Flex>
                </div>
                <Button
                  variant="tertiary"
                  size="s"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <Icon name="x" />
                </Button>
              </div>

              {/* Bio */}
              <Flex direction="column" gap="m">
                <Heading variant="heading-strong-m" color="neutral-on-background-strong">
                  About
                </Heading>
                <Text variant="body-default-l" color="neutral-on-background-medium">
                  {selectedMember.bio}
                </Text>
              </Flex>

              {/* Skills */}
              <Flex direction="column" gap="m">
                <Heading variant="heading-strong-m" color="neutral-on-background-strong">
                  Technical Skills
                </Heading>
                <Flex wrap gap="xs">
                  {selectedMember.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex}>
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Flex>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {selectedMember.social.github && (
                  <Button
                    href={selectedMember.social.github}
                    variant="secondary"
                    size="m"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" />
                    GitHub
                  </Button>
                )}
                {selectedMember.social.linkedin && (
                  <Button
                    href={selectedMember.social.linkedin}
                    variant="secondary"
                    size="m"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="linkedin" />
                    LinkedIn
                  </Button>
                )}
                <Button
                  href={`/team/${selectedMember.slug}`}
                  variant="primary"
                  size="m"
                >
                  View Full Profile
                </Button>
              </div>
            </Flex>
          </div>
        </div>
      )}
    </>
  );
}