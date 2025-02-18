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
      {startDate ? (
        <h3>
          {startDate} - {endDate}
        </h3>
      ) : (
        <h3>{endDate}</h3>
      )}
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

const Bullet = ({ point }) => (
  <ul className="bullet">
    <li>{point}</li>
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
      {show && (
        <>
          <ResumeDownload />
          <div className="resume-content">
            <Section title="Education">
              <EducationItem
                title="Northeastern University"
                location="Boston, MA"
                details="Candidate for B.S in Computer Science - Concentration in Artificial Intelligence, Minor in Math"
                gpa="3.5/4.0"
                endDate="Expected May 2025"
                relevantCoursework="Reinforcement Learning | Research in Natural Language Processing | Artificial Intelligence 
                Object-Oriented Design | Algorithms and Data | Computer Systems | Software Engineering
                Machine Learning and Data Mining | Linear Algebra | Probability and Statistics | Discrete Mathematics "
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
                  <Bullet point="Assisted in API test automation by writing 152 integration tests for RESTful API endpoints using Playwright" />,
                  <Bullet point="Designed positive and negative test validations for endpoints across internal and external .NET API microservices" />,
                  <Bullet point="Validated endpoints and payloads using Postman to ensure functionality of legacy ReadyAPI tests" />,
                  <Bullet point="Streamlined testing by restructuring verbose JSON payloads into object-oriented data models" />,
                  <Bullet point="Created documentation detailing quality assurance process to reduce onboarding time for new team members" />,
                ]}
              />
              <ListItem
                title="Software Engineer Co-op"
                company="Broad Institute"
                location="Cambridge, MA"
                startDate="January 2024"
                endDate="June 2024"
                details={[
                  <Bullet point="Aligned React UI with Figma board, improved data presentation, and refactored Typescript files for code quality" />,
                  <Bullet point="Optimized biomedical metadata queries to GCP and Microsoft Azure via Java Spring Boot" />,
                  <Bullet point="Iterated on the Spring Boot backend to optimize biomedical metadata queries hosted on Google Cloud and Azure" />,
                  <Bullet point="Refactored legacy cloud query workflow to streamline and remove years of technical debt" />,
                  <Bullet point="Automated the API profiling process to facilitate data-driven performance optimization with Python scripting" />,
                  <Bullet point="Improved custom cohort creation, data accessibility, and biomedical research workflows by closing 27 PRs" />,
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
                  <Bullet point="Identified weak password validation on registration and implemented custom password validation with Django" />,
                  <Bullet point="Created a multi-layered system heuristic for tab naming conventions enhancing 80% of multi-query searches" />,
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
                  <Bullet point="Streamlined API development with RTK Query eliminating the need for manual data fetching and caching" />,
                  <Bullet point="Designed proof-of-concept frontend with wireframing, Material UI, SASS, and React to handle scalability" />,
                  <Bullet point="Implemented user authentication with Django REST, CSRF validation, and password reset with email " />,
                  <Bullet point="Developed first version of Search feature supporting online news, Twitter, Reddit, and YouTube" />,
                ]}
              />
            </Section>

            <Section title="Projects">
              <ListItem
                title="Reinforcement Learning for Chess Agents"
                startDate="September 2024"
                endDate="January 2025"
                details={[
                  <Bullet point="Implemented Advantage Actor-Critic (A2C) and Soft Actor-Critic (SAC) algorithms to train and compete chess agents" />,
                  <Bullet point="Evaluated performance based on win rates, demonstrating SAC achieving a 4.1:1 win-to-loss ratio over A2C" />,
                  <Bullet point="Conducted comparative analysis of both algorithms, highlighting strengths and weaknesses in decision-making" />,
                ]}
              />
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
            </Section>

            <Section title="Technical Knowledge">
              <p>
                <strong>Frameworks/Libraries:</strong> React, Angular, Spring
                Boot, Node.js, Django, .NET, Flask, Google Cloud Platform (GCP),
                Microsoft Azure, MongoDB, Playwright, ReadyAPI, Postman,
                Swagger, PostgreSQL, MySQL, JUnit, Jest, Git
              </p>
              <p>
                <strong>Languages:</strong> TypeScript, JavaScript, HTML, CSS
                (SASS, Material UI), Python (Pandas, NumPy, Matplotlib,
                Scikit-learn, TensorFlow, Seaborn), Java, C#, C, C++, Assembly,
                Lean, Racket, SQL, Bash, Lisp (Racket)
              </p>
            </Section>

            <Section title="Interests">
              <p>
                Freelance abstract artist,music composition, piano, guitar,
                post-punk / new wave music, reading, skiing, traveling, yoga,
                weight training
              </p>
            </Section>
          </div>
        </>
      )}
    </div>
  );
}
