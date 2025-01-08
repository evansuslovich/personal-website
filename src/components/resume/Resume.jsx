import { useState } from "react";
import ResumeIntro from "./ResumeIntro";
import "./resume.scss";

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    <hr />
    <div>{children}</div>
  </div>
);

const ListItem = ({
  title,
  company,
  location,
  details,
  startDate,
  endDate,
}) => (
  <div className="list-item">
    <div>
      <h3>
        {title}{" "}
        {company
          ? `| ${company} | ${location}`
          : location
            ? `| ${location}`
            : ""}
      </h3>
      <h3>
        {startDate} - {endDate}
      </h3>
    </div>
    {details.map((detail, index) => (
      <div key={index}>{detail}</div>
    ))}
  </div>
);

const InfoRow = ({ label, content }) => (
  <div style={{ display: "flex", marginBottom: "8px" }}>
    <div style={{ width: "30%", fontWeight: "bold" }}>
      <em>{label}</em>
    </div>
    <div style={{ width: "70%" }}>
      <p>{content}</p>
    </div>
  </div>
);

const EducationItem = ({
  title,
  company,
  location,
  details,
  startDate,
  endDate,
  relevantCoursework,
  leadershipAndActivities,
  gpa,
}) => (
  <div className="list-item">
    <div>
      <h3>
        {title}{" "}
        {company
          ? `| ${company} | ${location}`
          : location
            ? `| ${location}`
            : ""}
      </h3>
      <h3>
        {startDate} - {endDate}
      </h3>
    </div>
    <div>
      <h3>{details}</h3>
      <h3> {`GPA ${gpa}`}</h3>
    </div>

    <InfoRow label="Relevant Coursework" content={relevantCoursework} />
    <InfoRow
      label="Leadership and Activities"
      content={leadershipAndActivities}
    />
  </div>
);

const Bullet = ({ point, subBullets = [] }) => (
  <ul className="bullet">
    <li>{point}</li>
    {subBullets.length > 0 && (
      <ul>
        {subBullets.map((subText, index) => (
          <li className="subBullet" key={index}>
            {subText}
          </li>
        ))}
      </ul>
    )}
  </ul>
);

const ResumeDownload = () => (
  <a
    className="resume-download"
    href="/resume.pdf"
    download="Evan_Suslovich_Resume.pdf"
  >
    Download Resume
  </a>
);

export default function Resume() {
  const [show, setShow] = useState(true);

  return (
    <div className="resume" id="resume">
      <ResumeIntro setShow={setShow} show={show} />
      <ResumeDownload />
      {show && (
        <div className="resume-content">
          <Section title="Education">
            <EducationItem
              title="Northeastern University"
              location="Boston, MA"
              details="Candidate for B.S in Computer Science - Concentration in Artificial Intelligence, Minor in Math"
              gpa="3.5/4.0"
              startDate="September 2021"
              endDate="Present"
              relevantCoursework="Object-Oriented Design | Algorithms and Data | Computer Systems | Software Engineering |
                            Reinforcement Learning | Machine Learning and Data Mining I | Artificial Intelligence
                            Linear Algebra | Probability and Statistics | Calculus II | Discrete Mathematics"
              leadershipAndActivities=" Founder and President of the Northeastern Art and Creative Therapy Club"
            />
          </Section>

          <Section title="Experience">
            <ListItem
              title="Software Engineer Intern"
              company="Carrier"
              location="Beverly, MA"
              startDate="June 2024"
              endDate="August 2024"
              details={[
                <Bullet point="Developed 152 integration tests in Playwright to validate API functionalities and enhance system reliability" />,
                <Bullet point="Streamlined API testing by abstracting 8 Json files into 3 models promoting object-oriented design practices" />,
                <Bullet point="Closed 13 tickets to automate testing for the SensiWatch platform, enhancing supply chain performance" />,
              ]}
            />
            <ListItem
              title="Software Engineer Co-op"
              company="Broad Institute"
              location="Cambridge, MA"
              startDate="January 2024"
              endDate="June 2024"
              details={[
                <Bullet point="Aligned React UI with Figma board, improved data presentation, and refactored frontend typing for code quality" />,
                <Bullet point="Iterated on the Spring Boot backend to optimize biomedical metadata queries hosted on Google Cloud and Azure" />,
                <Bullet point="Redesigned the cloud query building process with a builder design pattern removing the need for 7 constructors" />,
                <Bullet point="Developed a Python script to automate the API profiling process, enabling data-driven optimization for performance" />,
                <Bullet point="Contributed to Terra.Bio by completing 27 tickets, enabling the creation of cohorts using clinical and genomic variables, enhancing data accessibility and precision for biomedical research workflows" />,
              ]}
            />
            <ListItem
              title="Full-Stack Software Engineer Co-op"
              company="Media Cloud"
              location="Boston, MA"
              startDate="May 2023"
              endDate="September 2023"
              details={[
                <Bullet point="Implemented Jest framework in React frontend with 287 tests across 16 functions ensuring robust code quality" />,
                <Bullet point="Resolved 40% of frontend crashes with a solution for undefined behavior with icons in Material-UI components" />,
                <Bullet point="Developed a background task for concurrent large data downloads and automated zipping and emailing" />,
                <Bullet
                  point="Identified weak password validation on registration and implemented custom Django password validation"
                  subBullets={[
                    "Integrated end-to-end password validation displaying errors to users and disabling the 'register' button",
                  ]}
                />,
                <Bullet
                  point="Launched a multi-layered system heuristic for tab naming conventions enhancing 80% of multi-query searches"
                  subBullets={[
                    "Added manual title editing and customizable tab borders via a drop-down color menu",
                  ]}
                />,
                <Bullet point="Total contributions consist of 85+ pull requests with 750+ commits for 20,000+ users" />,
              ]}
            />

            <ListItem
              title="Software Engineer Intern"
              company="Media Cloud"
              location="Boston, MA"
              startDate="May 2022"
              endDate="May 2023"
              details={[
                <Bullet point="Initialized full-stack application with a Django backend and React frontend" />,
                <Bullet point="Streamlined API development with RTK Query eliminating the need to hand-write data fetching and caching" />,
                <Bullet point="Designed proof-of-concept frontend with wireframing, Material UI, SASS, and React to handle scalability" />,
                <Bullet point="Implemented user authentication with Django REST, including CSRF validation and password reset with email" />,
                <Bullet
                  point="Developed first version of Media Cloud's Search feature supporting online news, Twitter, Reddit, and YouTube"
                  subBullets={[
                    "Created an API to get the total attention of a query from two given dates",
                    "Created Search's automated dates, querying, querying preview, and deactivation of search button",
                  ]}
                />,
              ]}
            />
          </Section>

          <Section title="Projects">
            <ListItem
              title="DeepArtist - The Artist Classification System"
              startDate="September 2023"
              endDate="January 2024"
              details={[
                <Bullet point="Achieved nearly 80% accuracy in artist classification with a CNN model, making AI-driven art analysis accessible" />,
                <Bullet point="Developed a React application to visualize model accuracy, adjust hyperparameters, and explore real-time classification" />,
                <Bullet point="Built a scalable Flask backend for model creation, training, and data storage for future expansions and dataset updates" />,
              ]}
            />
            <ListItem
              title="Artelligence - Genre Classification of Paintings by Color Quantification"
              startDate="July 2023"
              endDate="September 2024"
              details={[
                <Bullet point="Iteratively quantified WikiArt's 13-genre dataset fetching 30+ features including color palette, moments, and richness" />,
                <Bullet point="Implemented a baseline K-Nearest Neighbors classifier, achieving a 30% accuracy rate to establish a starting point" />,
                <Bullet point="Established a pipeline for automated model evaluation, optimizing workflow for iterative testing and validation" />,
              ]}
            />
          </Section>

          <Section title="Technical Knowledge">
            <p>
              Frameworks: React, Spring Boot, Google Cloud, Azure, Node.js,
              Django, ASP.NET, Playwright, TensorFlow
            </p>
            <p>
              Languages: JavaScript, TypeScript, HTML/CSS, Python, Java, C, C#,
              C++, Assembly, Lean, Racket, SQL
            </p>
          </Section>

          <Section title="Interests">
            <p>
              Freelance abstract artist, mathematics, music composition,
              programming, piano, reading, skiing, traveling, yoga, weight
              training
            </p>
          </Section>
        </div>
      )}
    </div>
  );
}
