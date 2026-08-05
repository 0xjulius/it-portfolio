## Overview

**Duunify** is a production-ready Mini-SaaS platform engineered to replace traditional job application spreadsheets with an intelligent, automated tracking workflow. 

Tailored specifically for modern job seekers, Duunify automates data entry, visualizes recruitment pipelines, and tracks job search activity metrics in real time.

---

## The Problem & Solution

* **The Problem:** Tracking job applications in Excel or Notion requires constant manual updates, lacks contextual deadline notifications, and offers poor visibility into active progress.
* **The Solution:** A unified dashboard that extracts metadata directly from Finnish job portals (Duunitori, Jobly), visualizes application stages, and calculates actionable job search metrics.

---

## Core Features

### 1. Automated Link Scraping
Insert a job posting URL from major recruitment portals like **Duunitori** or **Jobly**, and Duunify automatically parses and populates key metadata:
* Company Name & Role Title
* Salary Range & Location
* Application Deadlines & Job Descriptions

### 2. Analytics & Activity Dashboard
* **Job Search Index:** A real-time score based on search velocity, response ratios, and interview conversions.
* **Activity Heatmap:** 9-week visual tracking matrix showing daily job search actions and consistency.
* **Pipeline Funnel:** Visual status distribution covering *Applied*, *Interview*, *Offer*, and *Rejected* stages.

### 3. Smart Calendar & Action Timeline
* Centralized calendar for interview dates, submission deadlines, and custom task reminders.
* Automated audit log tracking every status update, note, and application interaction chronologically.

---

## Tech Stack & Architecture

| Layer | Technologies | Key Implementations |
| :--- | :--- | :--- |
| **Frontend** | React, Tailwind CSS | Modular design system, responsive UI, data-dense dashboards |
| **State & API** | REST API, Axios | Async data fetching, state persistence, URL metadata parsing |
| **Deployment** | Vercel | CI/CD automation, serverless routing, production hosting |

---

## Key Learnings & Engineering Challenges

1. **DOM Parsing & Web Scraping:** Developed robust backend extraction logic to handle disparate HTML structures across dynamic recruitment sites without breaking schema validation.
2. **Metrics & Visualization:** Designed intuitive algorithms to turn raw timestamped action logs into readable progress charts and heatmaps.