# RA Story

Next.js project with Tailwind CSS.

## Getting Started

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Copy `.env.example` to `.env` and fill in the values:
    ```bash
    cp .env.example .env
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

## Environment Variables

Required variables in `.env`:

- `NEXT_PUBLIC_WP_API_BASE`: WordPress API Base URL
- `NEXT_PUBLIC_WP_USER`: WordPress User
- `NEXT_PUBLIC_WP_APP_PASSWORD`: WordPress App Password
- `PASSWORD`: App Password

## Pages

- `/`: Home
- `/memories`: List of memories
- `/memory/[id]`: Single memory view
- `/new`: Create new memory
