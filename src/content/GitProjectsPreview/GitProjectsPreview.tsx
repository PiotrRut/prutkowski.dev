import RepoCard from '@components/RepoCard';
import Section from '@components/Section';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BACKEND_URL from '@misc/backend';
import axios from 'axios';
import Link from 'next/link';
import React, { FunctionComponent, useEffect, useState } from 'react';

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

      <Link href="/projects" passHref>
        <Button
          className="wow fadeIn"
          variant="contained"
          color="inherit"
          endIcon={<NavigateNextIcon />}
        >
          See more
        </Button>
      </Link>
    </Section>
  );
};

export default GitProjectsPreview;
