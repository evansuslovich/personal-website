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
                  <Bullet point="Aligned React UI with Figma board, improved data presentation in 5 components, refactored 22 misaligned types" />,
                  <Bullet point="Enhanced 4 Spring Boot REST APIs by extending SQL queries to incorporate clinical data from GCP and Azure" />,
                  <Bullet point="Refactored 7 complex constructors using the Builder pattern, enhancing code reusability in 5 API endpoints" />,
                  <Bullet point="Refactored legacy cloud query workflow to streamline and remove years of technical debt" />,
                  <Bullet point="Automated the API profiling process to facilitate data-driven performance optimization with Python scripting" />,
                  <Bullet point="Contributed to custom cohort creation, data accessibility, and biomedical research workflows by merging 27 PRs" />,
                ]}
              />
              <ListItem
                title="Full-Stack Software Engineer Co-op"
                company="Media Cloud"
                location="Boston, MA"
                startDate="May 2023"
                endDate="September 2023"
                details={[
                  <Bullet point="Integrated Jest testing framework in React frontend with 287 tests across 16 functions, ensuring robust code quality and reliability" />,
                  <Bullet point="Resolved 40% of frontend crashes by addressing undefined behavior in Material-UI icon rendering logic" />,
                  <Bullet point="Engineered a background task for concurrent large data downloads with automated zipping and email delivery" />,
                  <Bullet point="Enhanced registration security by implementing custom password validation logic in Django with frontend support" />,
                  <Bullet point="Developed a multi-layered heuristic system for tab naming conventions, improving analytical clarity for 80% of multi-query searches" />,
                ]}
              />

              <ListItem
                title="Software Engineer Intern"
                company="Media Cloud"
                location="Boston, MA"
                startDate="May 2022"
                endDate="May 2023"
                details={[
                  <Bullet point="Built a full-stack application from the ground up using Django (backend) and React (frontend)" />,
                  <Bullet point="Accelerated frontend development by integrating RTK Query, removing the need for manual data fetching and caching logic" />,
                  <Bullet point="Designed a scalable proof-of-concept UI with wireframes, React, SASS, and Material UI for early-stage researchers" />,
                  <Bullet point="Implemented secure user authentication with Django REST, including CSRF validation and password reset via email" />,
                  <Bullet point="Launched the first version of the Search feature with support for online news, Twitter, Reddit, and YouTube sources" />,
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
                  <Bullet point="Evaluated performance based on win rates, demonstrated SAC achieving a 4.1:1 win-to-loss ratio over A2C" />,
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
                  <Bullet point="Built a scalable Flask backend to support model training, versioned data storage, and future dataset expansion" />,
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
