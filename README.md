# 25MCS0097# Backend Engineering Assessment Submission

This repository contains my implementation and design solutions for the backend engineering assessment. The submission focuses on backend development concepts such as middleware creation, API integration, scheduling logic, notification handling, and scalable system design.

The project has been organized into separate modules to keep the implementation clean, maintainable, and easy to understand.

---

# Project Structure

```text
backend-track/
│
├── logging_middleware/
├── vehicle_maintence_scheduler/
├── notification_app_be/
└── notification_system_design.md
```

---

# Logging Middleware

The logging middleware module was created to provide a reusable logging utility for backend services. It validates log inputs and sends structured log data to the provided evaluation API.

### Key Highlights

- Reusable logging function
- Input validation for stack, level, and package
- Centralized logging approach
- API-based log handling
- Structured and modular implementation

### Tech Stack

- Node.js
- Axios

### Running the Module

```bash
cd logging_middleware
npm install
node src/index.js
```

---

# Vehicle Maintenance Scheduler

This module implements a scheduling solution for assigning maintenance tasks to depots while respecting available mechanic hours. The implementation focuses on maximizing total maintenance impact within the provided constraints.

### Key Highlights

- Depot-wise task scheduling
- Greedy optimization strategy
- API integration for fetching data
- Constraint-based selection logic
- Clear terminal-based output formatting

### Tech Stack

- Node.js
- Axios

### Running the Module

```bash
cd vehicle_maintence_scheduler
npm install
node src/index.js
```

---

# Notification Backend Service

This module contains a simple backend notification service built using Express.js. It demonstrates REST API creation and JSON-based communication between client and server.

### Key Highlights

- Express.js server setup
- REST API endpoints
- Notification handling endpoint
- JSON request and response support
- Lightweight backend service structure

### Tech Stack

- Node.js
- Express.js

### Running the Module

```bash
cd notification_app_be
npm install
node src/server.js
```

---

# Notification System Design

The `notification_system_design.md` document contains solutions and explanations for different backend system design scenarios.

The document covers:

- REST API design
- Database schema planning
- Query optimization techniques
- Indexing strategies
- Caching approaches
- Queue-based processing
- Priority inbox implementation concepts
- Scalability considerations

---

# Technologies and Concepts Used

- Node.js
- Express.js
- Axios
- REST APIs
- Backend Middleware
- Scheduling Logic
- Database Optimization Concepts
- Redis Caching Concepts
- Queue-based Architecture

---

# Additional Notes

- HTTPS-based API communication was used during implementation.
- Token-based authentication was integrated for secure API access.
- Modular folder organization was followed to improve readability and maintainability.
- The implementation prioritizes clarity, simplicity, and structured backend development practices.

---

# Submission Summary

This repository demonstrates practical backend development concepts including middleware creation, API handling, scheduling optimization, backend service development, and scalable system design approaches.