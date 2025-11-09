# MTTV Website - Version 1

## Overview

This document outlines the plan and progress for the first version of the MTTV website. The goal is to create a simple, modern, and lightweight single-page application that allows users to upload a business report file, which will then be sent to a specific email address for manual processing.

## Key Features

*   **Descriptive Text:** A section on the page will describe the purpose of MTTV.
*   **File Upload:** A user-friendly file upload zone that supports drag-and-drop and file selection.
    *   Supported file types: PDF, Word.
    *   A maximum file size will be indicated.
*   **Email Submission:** A button to send the uploaded file to a designated email address.
*   **Admin-Editable Text:** A mechanism for administrators to update the page's text without modifying the code.
*   **Technology Stack:**
    *   Frontend: React, TypeScript
    *   Backend: Node.js
    *   Deployment: Lightweight, suitable for a custom server.

## Plan

### Phase 1: Frontend Development

1.  **Project Setup:**
    *   Utilize the existing Vite + React + TypeScript project structure.
    *   Install necessary dependencies:
        *   `react-dropzone` for the file upload component.
        *   `axios` for making HTTP requests to the backend.
2.  **UI/UX Design:**
    *   Create a clean, modern, and visually appealing user interface.
    *   Implement a responsive layout for both desktop and mobile devices.
    *   Use a professional and attractive color scheme and typography.
3.  **Component Implementation:**
    *   Develop the main application component (`App.tsx`).
    *   Integrate `react-dropzone` to create the file upload area.
    *   Add a "Send" button and the necessary text elements.
4.  **Styling:**
    *   Apply styles using CSS to create a polished look and feel.

### Phase 2: Backend Development (to be implemented)

1.  **Node.js Server:**
    *   Set up a simple Node.js server using a framework like Express.
    *   Create an endpoint to receive the file uploaded from the frontend.
2.  **Email Service:**
    *   Integrate `nodemailer` to send the received file as an email attachment to the specified address.
3.  **Configuration:**
    *   Use environment variables to securely store sensitive information like the recipient's email address and email server credentials.

### Phase 3: Advanced Features (Future Considerations)

1.  **Admin-Editable Text:**
    *   Implement a simple content management system (CMS) or use a headless CMS to allow administrators to edit the page content.
    *   Alternatively, for a lightweight solution, a password-protected admin page could be created to edit the text stored in a simple JSON file on the server.
2.  **User Authentication:**
    *   If needed, add user authentication to restrict access to certain features.
3.  **Database Integration:**
    *   Use a database (e.g., Firestore, PostgreSQL) to store file metadata or user information.

This blueprint will be updated as the project progresses.
