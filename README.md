# 🤖 AI Chatbot Full-Stack | Modern Monorepo

## 🌟 Overview

A cutting-edge Full-Stack AI Chatbot application built with **Bun**, **React 19**, and **Express**. This project demonstrates a robust monorepo architecture, seamless AI integration with context preservation, and a high-end developer experience (DX) using 2025's best practices.

### 🚀 Key Features

- **Intelligent Context Awareness**: Maintains dialogue flow using `conversationId` and Repository Pattern.
- **Premium UI/UX**:
  - `animate-pulse` typing indicators.
  - Interactive audio feedback (pop/notifications).
  - Smart keyboard handling (Enter/Shift+Enter).
- **Markdown Support**: Full support for lists, code blocks, and formatting using Tailwind Typography.
- **Bulletproof Validation**: Schema-based validation via Zod with structured error reporting.

---

## 🛠 Advanced Configuration & DX

### 🤖 Prompt Engineering & Optimization

The system uses a sophisticated prompt construction logic instead of hardcoded strings:

- **Dynamic Templating**: System instructions are stored in `.txt` files and injected with context from `.md` knowledge bases using a `{{parkInfo}}` placeholder system.
- **Context Preservation**: Implemented using a `Map`-based repository pattern to store and retrieve `previous_response_id`, enabling the AI to maintain complex, multi-turn conversations.
- **Optimized Parameters**: Tailored `temperature: 0.2` for high precision and `max_output_tokens: 200` to balance response depth with cost-efficiency.

### 🏗 Git Workflow & Quality Control

A professional Developer Experience (DX) is enforced via automated Git Hooks:

- **Husky & lint-staged**: Configured to intercept every commit.
- **Automated Formatting**: Runs **Prettier** (`--write`) automatically on all staged files (`.ts`, `.tsx`, `.css`, `.json`).
- **Format on Commit**: Ensures that even if a developer forgets to format a file in the IDE, the repository remains consistent and clean.

---

## 🛠 Tech Stack

### Frontend

- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4 (CSS-first engine)
- **UI Components:** Shadcn UI + Lucide Icons
- **Form Handling:** React Hook Form + Zod

### Backend

- **Runtime:** Bun (High-performance JS runtime)
- **Server:** Express + TypeScript
- **AI Engine:** OpenAI SDK (GPT-4o-mini)
- **Validation:** Zod (using `z.treeifyError`)

---

## 📦 Project Structure

```text
chat-full-stack/
├── packages/
│   ├── client/       # React 19 + Vite 7 + Tailwind v4
│   └── server/       # Express + OpenAI + Zod
├── index.ts          # Root entry point via Concurrently
├── package.json      # Workspaces configuration
└── .env              # Global environment variables
```

## 🚦 Getting Started

### 1️⃣ Prerequisites

Ensure you have [Bun](bun.sh) installed on your machine (v1.1+ recommended).

### 2️⃣ Installation

```bash
# Clone the repository
git clone github.com
cd chat-full-stack

# Install dependencies for all workspaces
bun install
```

### 3️⃣ Environment Setup

Create a .env file in the packages/server directory:

```text
OPENAI_API_KEY=your_proxy_api_key
OPENAI_BASE_URL=api.proxyapi.ru
```

### 4️⃣ Running the App

```bash
# Start both client and server concurrently from root
bun run dev
```
