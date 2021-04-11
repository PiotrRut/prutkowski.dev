import ProjectCard from '@components/ProjectCard';
import Section from '@components/Section';
import { projects } from '@misc/projects';
import React, { FunctionComponent } from 'react';

import { WorkProjectsWrapper } from './OtherProjectsPreview.styles';

// Projects I am involved in with at work
const OtherProjectsPreview: FunctionComponent = () => {
  return (
    <Section heading="Professional Projects">
      <WorkProjectsWrapper>
        {projects.slice(0, 2).map((p, i) => (
          <div
            className="wow fadeIn"
            style={{
              animationDelay: `${i * 100 + 100}ms`,
            }}
            key={i}
          >
            <ProjectCard
              picturePath={p.picture}
              title={p.title}
              description={p.description}
              path={p.path && p.path}
              team={p.team && p.team}
            />
          </div>
        ))}
      </WorkProjectsWrapper>
    </Section>
  );
};

export default OtherProjectsPreview;
