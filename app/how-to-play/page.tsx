import Head from 'next/head';
import Link from 'next/link';

export default function HowToPlay() {
  return (
    <>
      <Head>
        <title>How to Play - Kadin Answers</title>
        <meta name="description" content="Learn how to perform the Kadin Answers magic trick and prank your friends." />
      </Head>
      <div className="container">
        <div className="card">
          <h1 className="title">How to Play</h1>
          <div className="instructions">
            <p>Kadin Answers is a fun magic trick to prank your friends. Here’s the secret to making it work:</p>
            
            <h2>The Secret Steps:</h2>
            <ol>
              <li>
                <strong>In the "Petition" field:</strong> Type a period (dot) <code>.</code> character. This will activate the secret mode.
              </li>
              <li>
                <strong>Write the secret answer:</strong> After typing the dot, whatever you type next will be the secret answer to the question. However, your friends will see "kadin please answer the following question" being typed on the screen instead of the real answer. This is the magic!
              </li>
              <li>
                <strong>Ask the question:</strong> In the "Question" field, type the question that corresponds to the secret answer you just wrote.
              </li>
              <li>
                <strong>Reveal the magic:</strong> Click "Send question". The answer you secretly typed will be revealed, amazing your friends!
              </li>
            </ol>

            <h2>Example:</h2>
            <p>You want the answer to be "The party is at my house".</p>
            <ol>
              <li>In the Petition field, you type: <code>.The party is at my house</code></li>
              <li>The screen will show: <code>kadin please answer the following question</code></li>
              <li>In the Question field, you type: <code>Where is the party tonight?</code></li>
              <li>Click "Send question" and watch your friends' amazed faces!</li>
            </ol>
            
            <div className="go-back-link">
              <Link href="/">
                Try it now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
