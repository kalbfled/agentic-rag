"use client";

import styles from "./page.module.css";
import { useState } from 'react';

// This assumes Ollama is running on localhost.
// TODO - Make this a chat.
const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const OLLAMA_MODEL = "deepseek-r1:1.5b";


export default function Home()
{
    const [queries, setQueries] = useState([]);
    const [responses, setResponses] = useState([]);

    async function submitQuery(event)
    {
        // TODO - Clean user data
        const textbox = document.getElementById("query" + queries.length);
        console.debug(textbox.value);

        if (textbox.value === "")
            return;

        const response = await fetch(OLLAMA_URL, {
            method: "POST",
            body: JSON.stringify({
                model: OLLAMA_MODEL,
                prompt: textbox.value,
                // TODO - Handle streaming response
                stream: false,
            }),
        });

        if(response.ok)
        {
            const result = await response.json();
            console.debug(result);
            setQueries(queries.concat([textbox.value]));
            setResponses(responses.concat([result.response]));
            // document.getElementsByTagName("textarea")[0].value = "";
            textbox.value = "";
        }
        else
            console.error(response.status);
    }

    const chat = queries.map((q, index) => (
        <div key={index}>
            <p className={styles.query_box}>{q}</p>
            <p className={styles.response_box}>{responses[index] ?? '' /* guard against missing response */}</p>
        </div>
    ));

    const identifier = "query" + queries.length;

    return (
        <div className={styles.page}>
            <h1>Agentic RAG</h1>
            <main className={styles.main}>
                {(queries.length > 0) && (<section className={styles.chat}>
                    {chat}
                </section>)}

                <div className={styles.prompt}>
                    <label htmlFor={identifier}>What is thy bidding?</label><br/>
                    <textarea id={identifier} name={identifier} cols="60" rows="5" /><br/>
                    <button onClick={submitQuery}>Submit</button>
                </div>
            </main>
        </div>
    );
}
