# Agentic Retrieval Augmented Generation (RAG)

This is an agentic RAG system that uses Deepseek-R1 to **do something**.  It is built and tested using Node.js version 22.19.0 and `npm` version 10.9.3.

No effort has been made to prepare this project to run other than locally.  For example, HTTP endpoints are hard-coded for localhost.  There are no environment variables.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Getting Started

1. If necessary, install Docker, Node, and npm.
2. If you desire to use a GPU, follow the directions [here](https://hub.docker.com/r/ollama/ollama).
3. Run `docker compose up`.  This will launch an Ollama container, among others.
4. If the Ollama container now running did not already exist, or if subsequent steps yield errors suggesting the DeepSeek-R1 model isn't installed on the container, run `docker exec ollama ollama pull deepseek-r1:1.5b`.  DeepSeek-R1 comes in multiple sizes, and the 1.5B parameter model is hard-coded.  See [here](https://ollama.com/library/deepseek-r1) for other options.
5. Run the development server with `npm run dev`, and open [http://localhost:3000](http://localhost:3000) with your browser.
