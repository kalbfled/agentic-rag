import ChatQueryForm from "./chat_query_form.js";
import styles from "./page.module.css";

export default function Home()
{
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Agentic RAG</h1>
                <section id="chat">
                    <ChatQueryForm />
                </section>
            </main>
        </div>
    );
}
