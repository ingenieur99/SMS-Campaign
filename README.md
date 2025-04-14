# 📣 SMS-Campaign Creation 

A responsive SMS-Campaign creation dashboard built with **React Components**, **Next.js (App Router)**, and **Tailwind CSS**. This application allows users to create, preview, and manage SMS campaigns with a clean and interactive UI.

---

## 🚀 Features

- ✍️ Rich Text Campaign Editor
- 📱 Real-Time iPhone Message Preview
- 🧩 Modular React Components
- 🎨 Tailwind CSS for Custom UI Styling
- 🧠 Filter Panel for Target Segmentation
- 📊 Credit & Revenue Overview
- 🔔 Notification & User Toolbar
- 🔒 Fully Client-Side Rendered (`use client`)

---

## 🧪 Technologies Used

| Tech           | Description                                     |
|----------------|-------------------------------------------------|
| **Next.js**    | React framework for routing and structure       |
| **React**      | Functional components and hooks (`useState`)    |
| **Tailwind CSS** | Utility-first CSS framework for styling        |
| **TypeScript** | Strong typing for components and props          |
| **SVG + PNG Icons** | Used for UI indicators & branding         |



## 🗂 Project Structure
```bash
---
SMS-Campaign/

├── public/                  # Static assets (images, icons, etc.)
│   ├── ic-recherche.png
│   ├── send-2.png
│   └── ...
│
├── src/
│   ├── app/                 # Main app directory (Next.js App Router)
│   │   ├── page.tsx         # Main campaign page
│   │   └── globals.css      # Global styles (Tailwind + custom)
│   │   └── Layout.tsx      
│   │
│   ├── components/          # Reusable React components
│   │   ├── CampaignButton.tsx
│   │   ├── CampaignContent.tsx
│   │   ├── Filters.tsx
│   │   ├── Header.tsx
│   │   ├── IphonePreview.tsx
│   │   └── Sidebar.tsx
│
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── package.json             # Project dependencies

```
## 📦 Components Explained

### `CampaignButton.tsx`
Customizable button supporting:
- Variants: `primary`, `outline`, `ghost`
- Optional icons (placed to the right)
- Click handler

### `CampaignContent.tsx`
Multiline input for typing campaign messages:
- Expands with text
- Placeholder guidance
- Real-time controlled input

### `IphonePreview.tsx`
A responsive mockup of an iPhone with:
- Live message preview
- Time/date & battery indicators
- Link detection & styling

### `Filter.tsx`
Sidebar panel for filtering recipients:
- Patient dropdown (search, DOB, gender)
- Appointment type & status selectors
- Toggleable accordion for clarity

### `Header.tsx`
Top navigation containing:
- SMS credits with icon
- Revenue card with green growth arrow
- Notification bell with badge
- Avatar with user greeting

### `SideBar.tsx`
Placeholder for app-wide navigation (future scope).

---

## 🛠 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/SMS-campaign.git
cd SMS-Campaign

```
### 2. 🌐 Live Demo
🔗 Deployed App: https://www.sms-campaign.com/




