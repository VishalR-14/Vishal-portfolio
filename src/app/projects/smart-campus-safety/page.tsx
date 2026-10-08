"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const technologies = [
  "Python",
  "YOLO",
  "OpenCV",
  "Flask",
  "SQLite",
  "Twilio",
];

const features = [
  "Real-time camera monitoring",
  "Crowd detection",
  "Automated security alerts",
  "Email notification system",
  "SMS alerts using Twilio",
  "Event logging with SQLite",
];

export default function SmartCampusSafety() {
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
          02 / COMPUTER VISION · AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          AI Smart Campus
          <br />
          <span>Safety</span> System
        </motion.h1>

        <motion.p
          className="project-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A real-time computer vision platform designed to monitor campus
          environments, detect crowd situations and trigger automated
          security alerts.
        </motion.p>

        <div className="project-page-status">
          <span className="building-dot" />
          BUILT
        </div>

      </section>

      {/* Overview */}
      <section className="project-detail-section">

        <div className="project-detail-label">
          01 / OVERVIEW
        </div>

        <div className="project-detail-content">

          <h2>
            Turning campus cameras into
            <span> intelligent monitoring systems.</span>
          </h2>

          <p>
            The system uses computer vision to process camera feeds and
            identify situations that may require attention within a campus
            environment.
          </p>

          <p>
            When configured detection conditions are triggered, the platform
            can generate alerts and record relevant events for monitoring
            and review.
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
            Campus monitoring should be
            <span> proactive.</span>
          </h2>

          <p>
            Traditional camera systems primarily provide visual footage,
            leaving security teams to manually observe and identify unusual
            situations.
          </p>

          <p>
            This project explores how computer vision can assist with
            real-time monitoring and automatically surface situations that
            deserve attention.
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
                {String(index + 1).padStart(2, "0")}
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

      {/* Architecture */}
      <section className="project-detail-section">

        <div className="project-detail-label">
          05 / SYSTEM FLOW
        </div>

        <div className="project-detail-content">

          <h2>
            From camera input to
            <span> automated response.</span>
          </h2>

          <p>
            Camera input is processed through the computer vision pipeline,
            where detection results are evaluated against configured
            conditions.
          </p>

          <p>
            Relevant events can then be logged and connected to notification
            channels for faster response.
          </p>

        </div>

      </section>

      {/* Status */}
      <section className="project-status-section">

        <div>
          <span>PROJECT STATUS</span>
          <strong>BUILT</strong>
        </div>

        <div>
          <span>TYPE</span>
          <strong>AI / COMPUTER VISION</strong>
        </div>

        <div>
          <span>FOCUS</span>
          <strong>CAMPUS SAFETY</strong>
        </div>

      </section>

      {/* Footer */}
      <footer>

        <span>
          AI Smart Campus Safety System
        </span>

        <Link href="/">
          Back to portfolio ↗
        </Link>

      </footer>

    </main>
  );
}