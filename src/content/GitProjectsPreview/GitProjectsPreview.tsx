import Button from '@components/Button';
import RepoCard from '@components/RepoCard';
import Section from '@components/Section';
import { environment } from '@misc/environment';
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

import { Repo } from './GitProjectsPreview.models';
import { ProjectsWrapper } from './GitProjectsPreview.styles';

const GitProjectsPreview: FunctionComponent = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${environment.apiBaseUrl}/github/repos`
      );
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
              language={repo.repoLanguage}
              forks={repo.forks}
              name={repo.repoName}
              stars={repo.stars}
              description={repo.description}
              url={repo.gitUrl}
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
