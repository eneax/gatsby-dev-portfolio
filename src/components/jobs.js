import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';

import Title from './title';

// styles
const JobsSection = styled.section`
  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;

    &:hover {
      color: var(--clr-primary-3);
      box-shadow: 0 2px var(--clr-primary-3);
    }
  }

  .active-btn {
    color: var(--clr-primary-3);
    box-shadow: 0 2px var(--clr-primary-3);
  }

  @media screen and (min-width: 992px) {
    .jobs-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }

    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }

    .job-btn {
      margin-bottom: 1rem;

      &:hover {
        box-shadow: -2px 0 var(--clr-primary-3);
      }
    }

    .active-btn {
      box-shadow: -2px 0 var(--clr-primary-3);
    }
  }
`;

const JobInfo = styled.div`
  h3 {
    font-weight: 400;
  }

  h4 {
    text-transform: uppercase;
    color: var(--clr-secondary-4);
    background: var(--clr-secondary-5);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }

  .job-date {
    letter-spacing: var(--spacing);
  }

  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;

    .job-icon {
      color: var(--clr-primary-3);
    }

    p {
      margin-bottom: 0;
      color: var(--clr-secondary-2);
    }
  }
`;

// query
const getStrapiJobs = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        id
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const response = useStaticQuery(getStrapiJobs);
  const {
    allStrapiJobs: { nodes: jobs },
  } = response;

  const [value, setValue] = React.useState(0);
  const { position, company, date, desc } = jobs[value];

  return (
    <JobsSection className="section">
      <Title title="experience" />
      <div className="jobs-center">
        {/* Job Selector */}
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`job-btn ${index === value && 'active-btn'}`}
              onClick={() => setValue(index)}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* Job Info */}
        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div className="job-desc" key={item.id}>
              <FaAngleDoubleRight className="job-icon" />
              {item.name}
            </div>
          ))}
        </JobInfo>
      </div>

      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </JobsSection>
  );
};

export default Jobs;
