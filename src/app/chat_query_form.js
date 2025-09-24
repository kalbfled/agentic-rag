"use client";

// This assumes Ollama is running on localhost.
// TODO - Make this a chat.
const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";

// TODO - IDs should be unique.  Maybe use component props.
export default function ChatQueryForm()
{
    async function submitQuery()
    {
        // TODO - Clean user data?
        const query = document.getElementById("chat_query").value;
        console.debug(query);

        const response = await fetch(OLLAMA_URL, {
            method: "POST",
            body: JSON.stringify({
                // TODO - Handle streaming response?
                stream: false,
                model: "deepseek-r1:1.5b",
                prompt: query,
            }),
        });

        if(response.ok)
        {
            const result = await response.json();
            console.debug(result);
        }
        else
            console.error(response.status);
    }

    return (
        <div>
            <label htmlFor="chat_query">What is thy bidding?</label><br/>
            <textarea id="chat_query" name="chat_query" /><br/>
            <button onClick={submitQuery}>Submit</button>
        </div>
    );
}
