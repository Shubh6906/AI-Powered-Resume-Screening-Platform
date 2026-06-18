# ResumeAI - Project Progress

## Project Overview

**Project Name:** ResumeAI
**Type:** AI-Powered Resume Screening Platform (SaaS)

### Tech Stack

#### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* next-themes
* Lucide Icons

#### Backend

* FastAPI
* PostgreSQL
* SQLAlchemy
* JWT Authentication
* bcrypt Password Hashing

---

# Frontend Progress

## Landing Website ✅

Completed:

* Responsive Navbar
* Mobile Hamburger Menu
* Dark / Light Theme
* Hero Section
* Stats Section
* Features Section
* How It Works Section
* CTA Section
* Footer

---

## Authentication Pages ✅

Completed:

* Login Page UI
* Register Page UI
* Role Selector
* Terms & Conditions Page
* Privacy Policy Page

---

## Recruiter Dashboard UI ✅

Completed:

* Sidebar
* Topbar
* Stat Cards
* Hiring Chart
* Top Candidates
* Recent Activity

Status:

UI Complete

Backend Integration Pending

---

## Candidate Dashboard UI ✅

Status:

UI Complete

Backend Integration Pending

---

# Backend Progress

## Database Setup ✅

Completed:

* PostgreSQL setup
* SQLAlchemy configuration
* Session management
* Environment configuration

---

## Authentication Module ✅

Completed:

### User Model

Fields:

* id
* full_name
* email
* password
* role

### APIs

POST /auth/register

POST /auth/login

GET /auth/me

### Features

* bcrypt password hashing
* JWT generation
* Protected routes
* Current user endpoint

---

## Jobs Module ✅

### Job Model

Fields:

* id
* title
* company
* location
* description
* requirements
* salary
* created_by

### APIs

POST /jobs

GET /jobs

### Features

* Recruiter-only job creation
* Job listing

---

## Applications Module ✅

### Application Model

Fields:

* id
* candidate_id
* job_id
* status

### APIs

POST /applications/{job_id}

GET /applications/my

GET /applications/job/{job_id}

PUT /applications/{application_id}/status

### Features

Candidate:

* Apply for jobs
* View own applications

Recruiter:

* View applicants
* Shortlist applicants
* Reject applicants

---

## Resume Module ✅

### Resume Model

Fields:

* id
* candidate_id
* file_name
* file_path

### APIs

POST /resume/upload

GET /resume/me

DELETE /resume/delete

GET /resume/{candidate_id}

### Features

Candidate:

* Upload resume
* View uploaded resume
* Delete resume

Recruiter:

* View candidate resumes

### Storage

Uploaded resumes are stored inside:

backend/uploads/

---

# Complete ATS Workflow Implemented ✅

Recruiter

↓

Register

↓

Login

↓

Create Job

↓

Candidate

↓

Register

↓

Login

↓

View Jobs

↓

Apply Job

↓

Recruiter

↓

View Applicants

↓

Shortlist / Reject

↓

Candidate

↓

Upload Resume

↓

Recruiter

↓

View Candidate Resume

---

# Current Test Accounts

## Recruiter

Email:

[recruiter@test.com](mailto:recruiter@test.com)

Password:

password123

Role:

recruiter

---

## Candidate

Email:

[shubh@example.com](mailto:shubh@example.com)

Password:

password123

Role:

candidate

---

# Current Progress

Landing Website                 100%

Authentication                  100%

Database Foundation             100%

Jobs Module                     100%

Applications Module             100%

Resume Module                   100%

Resume Parsing                    0%

AI Skill Extraction               0%

AI Match Engine                   0%

Analytics                         0%

Frontend Integration             10%

Overall Project Completion ≈ 65%

---

# Next Phase

## Phase 12 — Resume Parsing Pipeline

Upcoming:

* PDF Text Extraction
* Skill Extraction
* Education Extraction
* Experience Extraction
* Structured Resume Data

---

## Future Phases

### AI Match Engine

* Match Score
* Candidate Ranking
* Missing Skill Detection

### Analytics

* Recruiter Dashboard Analytics
* Hiring Statistics

### Frontend Integration

* Connect Login/Register
* Connect Dashboards
* Connect Jobs
* Connect Applications
* Connect Resume Upload

---

# Goal

Build a production-quality AI-powered Resume Screening SaaS platform suitable for portfolio, internships, placements, and real-world deployment.
