"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Python",
  "AI",
  "SQL",
];

const features = [
  "Student profile and skill analysis",
  "Resume-based insights",
  "Placement requirement analysis",
  "Personalized preparation recommendations",
  "Career-focused intelligence",
];

export default function PlacementIntelligence() {
  return (
    <main className="project-page">

      {/* Navigation */}
      <nav className="nav project-nav">
        <div className="logo">
          VISHAL<span>.</span>
        </div>

        <Link href="/" className="back-link">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </nav>

      {/* Hero */}
      <section className="project-hero">

        <motion.div
          className="project-page-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          01 / MAJOR PROJECT · AI / FULL STACK
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          AI-Based Student
          <br />
          Placement <span>Intelligence</span>
          <br />
          System
        </motion.h1>

        <motion.p
          className="project-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          An intelligent platform designed to analyze student profiles,
          skills, resumes and placement requirements to provide personalized
          preparation and career insights.
        </motion.p>

        <div className="project-page-status">
          <span className="building-dot" />
          IN DEVELOPMENT
        </div>

      </section>

      {/* Overview */}
      <section className="project-detail-section">

        <div className="project-detail-label">
          01 / OVERVIEW
        </div>

        <div className="project-detail-content">

          <h2>
            Turning student data into
            <span> actionable intelligence.</span>
          </h2>

          <p>
            The system is being designed to help students understand their
            current skill profile, identify gaps and prepare more effectively
            for placement opportunities.
          </p>

          <p>
            Instead of treating placement preparation as a generic process,
            the platform focuses on personalized insights based on the
            student&apos;s profile and target requirements.
          </p>

        </div>

      </section>

      {/* Problem */}
      <section className="project-detail-section">

        <div className="project-detail-label">
          02 / PROBLEM
        </div>

        <div className="project-detail-content">

          <h2>
            Placement preparation is often
            <span> generic.</span>
          </h2>

          <p>
            Students frequently prepare using the same resources regardless
            of their individual skills, weaknesses or the requirements of the
            companies they are targeting.
          </p>

          <p>
            This project explores how AI can make that process more
            personalized and data-driven.
          </p>

        </div>

      </section>

      {/* Features */}
      <section className="project-detail-section">

        <div className="project-detail-label">
          03 / KEY FEATURES
        </div>

        <div className="feature-list">

          {features.map((feature, index) => (
            <motion.div
              className="feature-item"
              key={feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <span>
                0{index + 1}
              </span>

              <strong>
                {feature}
              </strong>

              <ArrowUpRight size={18} />
            </motion.div>
          ))}

        </div>

      </section>

      {/* Technology */}
      <section className="project-detail-section">

        <div className="project-detail-label">
          04 / TECHNOLOGY
        </div>

        <div className="project-tech-grid">

          {technologies.map((technology) => (
            <div
              className="project-tech"
              key={technology}
            >
              {technology}
            </div>
          ))}

        </div>

      </section>

      {/* Status */}
      <section className="project-status-section">

        <div>
          <span>PROJECT STATUS</span>
          <strong>ACTIVE DEVELOPMENT</strong>
        </div>

        <div>
          <span>TYPE</span>
          <strong>MAJOR PROJECT</strong>
        </div>

        <div>
          <span>FOCUS</span>
          <strong>AI · FULL STACK</strong>
        </div>

      </section>

      {/* Footer */}
      <footer>

        <span>
          AI-Based Student Placement Intelligence System
        </span>

        <Link href="/">
          Back to portfolio ↗
        </Link>

      </footer>

    </main>
  );
}