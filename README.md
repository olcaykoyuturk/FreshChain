# FreshChain  
### Blockchain-Based Supply Chain Traceability Platform

FreshChain is a web-based traceability system that enables transparent and immutable tracking of products throughout the supply chain using blockchain technology. The platform supports both **public users** and **authorized supply-chain roles**, providing secure access to product lifecycle data.

---

## Overview

FreshChain allows a product to be tracked from **producer to retailer**, ensuring trust, transparency, and data integrity.  
Public users can verify products via **QR codes**, while authorized roles interact with the system according to their permissions.

---

## Key Features

### Blockchain Traceability
- Product batches are recorded on-chain
- All records are immutable and transparent
- Full lifecycle visibility: production, transport, distribution, retail

### Public QR Code Query
- Camera-based QR scanning via web browser
- Designed for real-world usage (printed QR codes on products or paper)
- Automatically extracts `Batch ID` from QR content
- Displays complete product history in **read-only mode**
- No wallet or blockchain transaction required for public users

### Role-Based Access Control
- Supported roles:
  - Producer
  - Transporter
  - Distributor
  - Retailer
  - Admin
- Each role can only perform authorized actions
- Unauthorized operations are blocked at both UI and smart contract level

### Modular Frontend Architecture
The frontend has been refactored from a single large file into a clean modular structure:

- `index.html` – Application structure
- `styles.css` – UI styling and layout
- `app.js` – Application logic and blockchain interactions

This refactor preserves all functionality while improving readability, maintainability, and scalability.

---

## Technology Stack

- **Smart Contracts:** Solidity (EVM compatible)
- **Frontend:** HTML, CSS, JavaScript
- **Blockchain Integration:** Ethers.js
- **QR Scanning:** html5-qrcode
- **Wallet Integration:** MetaMask
- **Development Tools:** Remix IDE

---

## Use Cases

FreshChain is suitable for:
- Academic blockchain projects
- Supply chain transparency demonstrations
- QR-based product verification systems
- Public traceability dashboards

---

## License

This project is developed for educational and demonstration purposes.
