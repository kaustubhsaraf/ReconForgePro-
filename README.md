# ReconForgePro

<p align="center">
  <strong>Advanced Web Reconnaissance & OSINT Platform for Bug Bounty Hunters and Security Researchers</strong>
</p>

<p align="center">
  A modern browser-based reconnaissance toolkit that centralizes subdomain enumeration, OSINT collection, vulnerability discovery, GitHub dorking, CVE research, technology fingerprinting, and information disclosure hunting.
</p>

---

## Overview

ReconForgePro is a lightweight reconnaissance platform designed for:

* Bug bounty hunters
* Penetration testers
* Security researchers
* Red team operators
* OSINT investigators

The tool provides a single interface for launching reconnaissance activities against authorized targets using publicly available search engines, security platforms, certificate transparency logs, DNS intelligence services, and vulnerability databases.

Unlike traditional recon frameworks that require installation and configuration, ReconForgePro runs entirely in the browser and leverages external reconnaissance sources.

---

## Features

### Subdomain Enumeration

Discover subdomains using multiple reconnaissance sources including:

* crt.sh
* SecurityTrails
* DNS databases
* Certificate Transparency logs
* Search engine indexing
* Passive reconnaissance services

### Secret Discovery

Identify potentially exposed:

* API Keys
* Access Tokens
* Credentials
* Configuration Files
* Backup Files
* Cloud Secrets

### Vulnerability Discovery

Includes extensive dork collections for:

* SQL Injection (SQLi)
* Cross-Site Scripting (XSS)
* Local File Inclusion (LFI)
* Remote Code Execution (RCE)
* Server-Side Request Forgery (SSRF)
* Open Redirects
* Information Disclosure

### GitHub Reconnaissance

Search GitHub repositories for:

* Hardcoded credentials
* API keys
* Sensitive configuration files
* Exposed source code
* Infrastructure artifacts

### Technology Fingerprinting

Identify:

* CMS Platforms
* Web Frameworks
* Programming Languages
* Hosting Infrastructure
* Security Technologies

### DNS & Network Intelligence

Quick access to:

* WHOIS Lookups
* DNS Records
* Reverse IP Lookups
* SSL/TLS Analysis
* ASN Information
* DNS Enumeration

### CVE Research

Search across multiple vulnerability resources:

* CVE databases
* Security advisories
* Exploit references
* Vendor disclosures

### Information Disclosure Hunting

Locate exposed:

* Backup files
* Log files
* Configuration files
* Database dumps
* Sensitive documents

---

## Screenshots

### Home Dashboard

Modern reconnaissance interface with categorized tooling and domain targeting.

### Recon Categories

* Subdomain Enumeration
* GitHub Dorking
* Technology Discovery
* DNS Intelligence
* Vulnerability Hunting
* Secret Discovery
* Information Disclosure
* CVE Research

---

## Architecture

```text
┌────────────────────┐
│ User Inputs Domain │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Domain Validation  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Tool Selection UI  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Dynamic URL Builder│
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ External Recon APIs│
│ & Search Engines   │
└────────────────────┘
```

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### UI Libraries

* Font Awesome
* Google Fonts

### Security Features

* Domain validation
* Input sanitization
* Safe URL generation
* Browser-based execution

---

## Installation

Clone the repository:

```bash
git clone https://github.com/kaustubhsaraf/ReconForgePro.git
cd ReconForgePro
```

No additional dependencies are required.

Open the application:

```bash
open index.html
```

or simply double-click:

```text
index.html
```

---

## Usage

### Basic Workflow

1. Open ReconForgePro.
2. Enter the target domain.
3. Select a reconnaissance category.
4. Launch the desired reconnaissance module.
5. Analyze results returned by external intelligence sources.

### Example

Target:

```text
example.com
```

Possible actions:

* Enumerate subdomains
* Search GitHub for exposed secrets
* Perform DNS reconnaissance
* Analyze SSL certificates
* Search vulnerability indicators
* Investigate exposed files

---

## Project Structure

```text
ReconForgePro/
│
├── index.html
├── reconforge-pro.html
│
├── assets/
│   ├── style.css
│   └── jquery-2.1.3.min.js
│
├── css/
│   └── main.css
│
├── js/
│   └── main.js
│
└── README.md
```

---

## Security Considerations

ReconForgePro performs passive and semi-passive reconnaissance by directing users to third-party intelligence services.

Users are responsible for ensuring:

* Proper authorization
* Compliance with program rules
* Adherence to local laws
* Ethical security testing practices

---

## Intended Use

This project is intended for:

* Bug bounty programs
* Authorized penetration tests
* Red team exercises
* Security research
* OSINT investigations
* Educational purposes

---

## Future Enhancements

* Export results to CSV/JSON
* Workspace management
* API integrations
* Automated reporting
* Screenshot capture
* Asset inventory tracking
* Vulnerability workflow automation
* Dark/Light theme support
* User-defined recon profiles

---

## Author

**Kaustubh Saraf**

Cybersecurity Researcher | Bug Bounty Hunter | Security Engineer

GitHub:
https://github.com/kaustubhsaraf

---

## Disclaimer

This tool is intended exclusively for authorized security assessments and educational purposes.

The author assumes no responsibility for misuse, unauthorized testing, or actions that violate applicable laws or policies.
