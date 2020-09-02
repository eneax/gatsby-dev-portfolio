import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaAngleDoubleRight } from 'react-icons/fa';

import Title from './title';

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
    <section className="section jobs">
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
        <div className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div className="job-desc" key={item.id}>
              <FaAngleDoubleRight className="job-icon" />
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Jobs;
