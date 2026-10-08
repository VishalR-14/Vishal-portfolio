"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "MAJOR PROJECT · AI / FULL STACK",
    title: "AI-Based Student Placement Intelligence System",
    description:
      "An intelligent placement platform designed to analyze student profiles, skills, resumes and placement requirements to provide personalized preparation and career insights.",
    tags: ["Next.js", "TypeScript", "AI", "Python"],
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    category: "COMPUTER VISION · AI",
    title: "AI Smart Campus Safety System",
    description:
      "A real-time computer vision platform designed to monitor campus environments, detect crowd situations and trigger automated security alerts.",
    tags: ["Python", "YOLO", "OpenCV", "Flask"],
    status: "BUILT",
  },
];

const technologies = [
  {
    number: "01",
    name: "Python",
    category: "PROGRAMMING · AI",
    description: "Primary language for AI, automation and backend development.",
  },
  {
    number: "02",
    name: "TypeScript",
    category: "PROGRAMMING",
    description: "Type-safe development for modern web applications.",
  },
  {
    number: "03",
    name: "JavaScript",
    category: "PROGRAMMING",
    description: "Core language for interactive web applications.",
  },
  {
    number: "04",
    name: "React",
    category: "FRONTEND",
    description: "Component-based UI development.",
  },
  {
    number: "05",
    name: "Next.js",
    category: "FULL STACK",
    description: "Modern framework for production-ready web applications.",
  },
  {
    number: "06",
    name: "Node.js",
    category: "BACKEND",
    description: "JavaScript runtime for backend services and APIs.",
  },
  {
    number: "07",
    name: "Java",
    category: "PROGRAMMING",
    description: "Object-oriented programming and application development.",
  },
  {
    number: "08",
    name: "C++",
    category: "PROGRAMMING · DSA",
    description: "Problem solving, algorithms and performance-oriented programming.",
  },
  {
    number: "09",
    name: "SQL",
    category: "DATABASE",
    description: "Database querying, data management and relational systems.",
  },
  {
    number: "10",
    name: "MongoDB",
    category: "DATABASE",
    description: "NoSQL database for flexible application data.",
  },
  {
    number: "11",
    name: "OpenCV",
    category: "COMPUTER VISION",
    description: "Computer vision and real-time image processing.",
  },
  {
    number: "12",
    name: "YOLO",
    category: "AI · COMPUTER VISION",
    description: "Real-time object detection and visual intelligence.",
  },
  {
    number: "13",
    name: "Git",
    category: "DEVELOPER TOOLS",
    description: "Version control and collaborative software development.",
  },
  {
    number: "14",
    name: "Docker",
    category: "DEVOPS",
    description: "Containerized application development and deployment.",
  },
];

const certifications = [
  {
    number: "01",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "APR 2026",
    image: "/certificates/aws-cloud-practitioner.png",
  },
  {
    number: "02",
    title: "AWS Networking Basics",
    issuer: "AWS Training & Certification",
    date: "APR 2026",
    image: "/certificates/aws-networking-basics.png",
  },
  {
    number: "03",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "NOV 2025",
    image: "/certificates/networking-cisco.png",
  },
  {
    number: "04",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy · Dr. Angela Yu",
    date: "JAN 2025",
    image: "/certificates/python-100-days.png",
  },
  {
    number: "05",
    title: "Database Management System from Scratch - Part 1",
    issuer: "Udemy",
    date: "MAY 2025",
    image: "/certificates/dbms-udemy.png",
  },
  {
    number: "06",
    title: "DBMS Course - Master the Fundamentals and Advanced Concepts",
    issuer: "Scaler Topics",
    date: "MAR 2025",
    image: "/certificates/dbms-scaler.png",
  },
  {
    number: "07",
    title: "Architecting for the Cloud in EU Governments",
    issuer: "AWS Training & Certification",
    date: "APR 2026",
    image: "/certificates/aws-cloud-eu-governments.png",
  },
];


export default function Home() {
  const [selectedCertificate, setSelectedCertificate] = useState<
  (typeof certifications)[number] | null
>(null);
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">VISHAL<span>.</span></div>

        <div className="nav-links">
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#technologies">Stack</a>
  <a href="#contact">Contact</a>
</div>

        <div className="nav-socials">
  <a
    href="https://github.com/VishalR-14"
    target="_blank"
    rel="noopener noreferrer"
    className="github-button"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/vishal-r-805091293"
    target="_blank"
    rel="noopener noreferrer"
    className="github-button"
  >
    LinkedIn ↗
  </a>
</div>
      </nav>

      {/* Hero */}
      <section className="hero">
  <motion.div
    className="hero-grid"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
  />

  <div className="hero-content">
    <motion.div
      className="status"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="status-dot" />
      Available for opportunities
    </motion.div>

    <motion.p
      className="eyebrow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      CSE STUDENT · SOFTWARE DEVELOPER
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.25,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      Building
      <br />
      <span>intelligent</span>
      <br />
      systems.
    </motion.h1>

    <motion.p
      className="hero-description"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.45 }}
    >
      I&apos;m Vishal — a Computer Science student and developer interested
      in AI, software engineering and building products that solve
      real-world problems.
    </motion.p>

    <motion.div
      className="hero-actions"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <a href="#projects" className="primary-button">
        Explore Projects
        <span>↓</span>
      </a>

      <a href="#contact" className="secondary-button">
        Let&apos;s Connect
        <span>↗</span>
      </a>
    </motion.div>
  </div>

  <motion.div
    className="hero-meta"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.8 }}
  >
    <div>
      <span>BASED IN</span>
      <strong>INDIA</strong>
    </div>

    <div>
      <span>FOCUS</span>
      <strong>AI / SOFTWARE</strong>
    </div>

    <div>
      <span>STATUS</span>
      <strong>BUILDING</strong>
    </div>
  </motion.div>
</section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="section-label">01 / ABOUT</div>

        <div className="about-content">
          <h2>
            Curious about technology.
            <br />
            Serious about <span>building.</span>
          </h2>

          <p>
            I enjoy turning ideas into practical software systems. My current
            interests include artificial intelligence, full-stack development,
            computer vision and developer technologies.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <div className="section-label">02 / SELECTED WORK</div>

          <p>
            A small selection of projects I&apos;m building and experimenting
            with.
          </p>
        </div>

        <div className="projects-grid">
  {projects.map((project, index) => {
    return (
      <motion.article
        className="project-card"
        key={project.number}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
        }}
      >
        <div className="project-glow" />

        <div className="project-top">
          <span>{project.number}</span>

          <span className="project-status">
            <span className="status-dot-small" />
            {project.status}
          </span>
        </div>

        <div className="project-body">
          <div className="project-category">
            {project.category}
          </div>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <Link
            href={
              project.number === "01"
                ? "/projects/placement-intelligence"
                : "/projects/smart-campus-safety"
            }
            className="project-action"
          >
            <span>Explore project</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </motion.article>
    );
  })}
</div>


      </section>

      {/* Technologies */}
      <section
       id="technologies"
      className="section technologies-section"
      >
        <div className="section-header">
          <div className="section-label">03 / TECHNOLOGIES</div>

          <p>
            Tools and technologies I use to design, build and experiment with
            software systems.
          </p>
        </div>

        <div className="technology-list">
          {technologies.map((technology, index) => (
            <motion.div
              className="technology-item"
              key={technology.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <span className="technology-number">
                {technology.number}
              </span>

              <div className="technology-name">
                {technology.name}
              </div>

              <div className="technology-category">
                {technology.category}
              </div>

              <div className="technology-description">
                {technology.description}
              </div>

              <ArrowUpRight
                className="technology-arrow"
                size={18}
              />
            </motion.div>
          ))}
        </div>
      </section>

     {/* Certifications */}
<section className="section certifications-section">
  <div className="section-header">
    <div className="section-label">04 / CERTIFICATIONS</div>

    <p>
      Selected credentials and completed learning across software,
      programming, networking and cloud technologies.
    </p>
  </div>

  <div className="certification-list">
    {certifications.map((cert, index) => (
      <motion.div
        className="certification-row"
        key={cert.number}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
      >
        <span className="certification-number">
          {cert.number}
        </span>

        <div className="certification-main">
          <h3>{cert.title}</h3>
          <p>{cert.issuer}</p>
        </div>

        <span className="certification-date">
          {cert.date}
        </span>

        <button
  type="button"
  className="certification-view"
  onClick={() => setSelectedCertificate(cert)}
>
          <span>VIEW</span>
          <ArrowUpRight size={17} />
        </button>
      </motion.div>
    ))}
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-label">05 / CONTACT</div>

        <h2>
          Have an idea?
          <br />
          Let&apos;s <span>build.</span>
        </h2>

        <a href="mailto:vishalpvt10@gmail.com" className="contact-button">
          Get in touch ↗
        </a>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Vishal</span>
        <span>Built with Next.js & TypeScript</span>
      </footer>
      {selectedCertificate && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >
    <button
      className="certificate-modal-close"
      onClick={() => setSelectedCertificate(null)}
      aria-label="Close certificate"
    >
      <X size={22} />
    </button>

    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedCertificate.image}
        alt={`${selectedCertificate.title} certificate`}
      />

      <div className="certificate-modal-info">
        <span>{selectedCertificate.issuer}</span>
        <strong>{selectedCertificate.title}</strong>
      </div>
    </div>
  </div>
)}
    </main>
  );
}
         