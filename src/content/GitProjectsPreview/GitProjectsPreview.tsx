import Button from '@components/Button';
import RepoCard from '@components/RepoCard';
import Section from '@components/Section';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

import { Repo } from './GitProjectsPreview.models';
import { ProjectsWrapper } from './GitProjectsPreview.styles';

// The projects section on the main page, with three latest
const GitProjectsPreview: FunctionComponent = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/platforms/github/repos`);
      setRepos(response.data);
    };
    fetchData();
  }, []);

  return (
    <Section id="proj-preview" heading="GitHub Projects">
      <ProjectsWrapper>
        {repos.slice(0, 3).map((repo, index) => (
          <div
            className="wow fadeIn"
            style={{
              animationDelay: `${index * 100 + 100}ms`,
            }}
            key={index}
          >
            <RepoCard
              language={repo.language}
              forks={repo.forks}
              name={repo.name}
              stars={repo.stars}
              description={repo.description}
              url={repo.url}
            />
          </div>
        ))}
      </ProjectsWrapper>

      <Button
        name="projects"
        href="/projects"
        label="See more"
        iconRight={<BsChevronRight />}
      />
    </Section>
  );
};

export default GitProjectsPreview;
