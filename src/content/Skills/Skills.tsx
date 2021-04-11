import Section from '@components/Section';
import { skills } from '@misc/skills';
import React, { FunctionComponent } from 'react';

import { SkillItem, SkillsWrapper } from './Skills.styles';

// Sections with my skills displayed
const Skills: FunctionComponent = () => {
  return (
    <Section heading="Some things I know...">
      <SkillsWrapper>
        {skills.map((s, i) => {
          return (
            <div
              className="wow fadeIn"
              style={{
                animationDelay: `${i * 70 + 70}ms`,
              }}
              key={i}
            >
              <SkillItem>{s.name}</SkillItem>
            </div>
          );
        })}
      </SkillsWrapper>
    </Section>
  );
};

export default Skills;
