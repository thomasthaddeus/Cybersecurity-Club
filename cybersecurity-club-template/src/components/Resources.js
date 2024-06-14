import React from 'react';
import './Resources.css'; // Import the CSS file for styling

const Resources = () => {
  return (
    <div className="resources-page">
      <h2>Resources</h2>
      <div className="resources-content">
        <p>Explore a wide range of topics relevant to cybersecurity enthusiasts and professionals. Our resources cover fundamental concepts, advanced techniques, and current trends in the field.</p>
        <h3>Topics</h3>
        <ul>
          <li>Cybersecurity Fundamentals
            <ul>
              <li>Introduction to Cybersecurity</li>
              <li>Types of Cyber Threats</li>
              <li>Basic Cyber Hygiene</li>
              <li>History of Cybersecurity</li>
            </ul>
          </li>
          <li>Network Security
            <ul>
              <li>Network Protocols and Architecture</li>
              <li>Firewalls and VPNs</li>
              <li>Intrusion Detection Systems</li>
              <li>Wireless Network Security</li>
            </ul>
          </li>
          <li>Cryptography
            <ul>
              <li>Encryption and Decryption</li>
              <li>Public Key Infrastructure</li>
              <li>Hash Functions</li>
              <li>Cryptographic Algorithms</li>
            </ul>
          </li>
          <li>Ethical Hacking
            <ul>
              <li>Penetration Testing</li>
              <li>Social Engineering</li>
              <li>Vulnerability Assessment</li>
              <li>Exploit Development</li>
            </ul>
          </li>
          <li>Digital Forensics
            <ul>
              <li>Incident Response</li>
              <li>Data Recovery Techniques</li>
              <li>Forensic Tools and Software</li>
              <li>Chain of Custody</li>
            </ul>
          </li>
          <li>Web Application Security
            <ul>
              <li>Common Vulnerabilities (OWASP Top 10)</li>
              <li>Secure Coding Practices</li>
              <li>Web Application Firewalls</li>
              <li>Cross-Site Scripting (XSS) and SQL Injection</li>
            </ul>
          </li>
          <li>Operating System Security
            <ul>
              <li>Windows Security</li>
              <li>Linux Security</li>
              <li>MacOS Security</li>
              <li>Mobile OS Security</li>
            </ul>
          </li>
          <li>Cloud Security
            <ul>
              <li>Cloud Computing Models</li>
              <li>Data Security in the Cloud</li>
              <li>Identity and Access Management</li>
              <li>Compliance and Legal Issues</li>
            </ul>
          </li>
          <li>Malware Analysis
            <ul>
              <li>Types of Malware</li>
              <li>Reverse Engineering</li>
              <li>Static and Dynamic Analysis</li>
              <li>Malware Detection Techniques</li>
            </ul>
          </li>
          <li>Cyber Law and Ethics
            <ul>
              <li>Legal Frameworks and Regulations</li>
              <li>Ethical Issues in Cybersecurity</li>
              <li>Privacy Laws and Policies</li>
              <li>Intellectual Property</li>
            </ul>
          </li>
          <li>Security Awareness and Training
            <ul>
              <li>Phishing Awareness</li>
              <li>Social Media Security</li>
              <li>Safe Online Practices</li>
              <li>Security Policy Development</li>
            </ul>
          </li>
          <li>Emerging Trends and Technologies
            <ul>
              <li>Artificial Intelligence in Cybersecurity</li>
              <li>Blockchain Security</li>
              <li>Internet of Things (IoT) Security</li>
              <li>Quantum Computing and Cryptography</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
