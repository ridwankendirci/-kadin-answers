"use client";

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

export default function Home() {
  const [petition, setPetition] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [hiddenAnswer, setHiddenAnswer] = useState('');
  const [isWritingSecret, setIsWritingSecret] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const fullText = "kadin please answer the following question";
  const petitionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isWritingSecret && petitionRef.current) {
      petitionRef.current.selectionStart = petitionRef.current.selectionEnd = petitionRef.current.value.length;
    }
  }, [isWritingSecret, displayText]);

  const handlePetitionKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '.') {
      e.preventDefault();
      if (petition === 'kadin') {
        setIsWritingSecret(true);
        setDisplayText('kadin');
        setCharIndex(0);
      }
    } else if (isWritingSecret) {
      e.preventDefault();
      if (e.key === 'Backspace') {
        setHiddenAnswer(prev => prev.slice(0, -1));
        if (displayText.length > 'kadin'.length) {
          setDisplayText(prev => prev.slice(0, -1));
          setCharIndex(prev => Math.max(0, prev - 1));
        }
      } else if (e.key.length === 1) {
        setHiddenAnswer(prev => prev + e.key);
        if (charIndex < fullText.length - 'kadin'.length) {
          setDisplayText(prev => prev + fullText[charIndex + 'kadin'.length]);
          setCharIndex(prev => prev + 1);
        }
      }
    }
  };

  const handlePetitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isWritingSecret) {
      setPetition(value);
    }
  };

  const handleClearAll = () => {
    setPetition('');
    setQuestion('');
    setHiddenAnswer('');
    setIsWritingSecret(false);
    setDisplayText('');
    setCharIndex(0);
    setAnswer('');
  };

  const handleClearQuestion = () => {
    setQuestion('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hiddenAnswer) {
      setAnswer("Please write your petition starting with 'kadin.'");
      return;
    }
    setAnswer(hiddenAnswer);
  };

  return (
    <>
      <Head>
        <title>Kadin Answers - Virtual Tarot</title>
        <meta name="description" content="Ask Kadin anything you want to know" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background-anim"></div>
      <Container>
        <div className="social-buttons-top-left">
          <Button variant="dark" href="https://instagram.com/rdvnkndrc" target="_blank" className="me-2 social-btn">
            <i className="bi bi-instagram"></i>
          </Button>
          <Button variant="dark" href="https://x.com/kuroikenshi0" target="_blank" className="social-btn">
            <i className="bi bi-twitter"></i>
          </Button>
        </div>
        <div className="card">
          <h1 className="title">Kadin Answers</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>
                <div className="icon-container">
                  <i className="bi bi-stars"></i>
                </div>
                Petition
              </Form.Label>
              <InputGroup>
                <Form.Control
                  ref={petitionRef}
                  type="text"
                  placeholder="please answer kadin"
                  value={isWritingSecret ? displayText : petition}
                  onChange={handlePetitionChange}
                  onKeyDown={handlePetitionKeyDown}
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <div className="icon-container">
                  <i className="bi bi-question-circle"></i>
                </div>
                Question
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Write your question here"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <div className="button-row">
              <Button variant="primary" type="submit" className="w-50 me-3">
                Send question
              </Button>
              <Button variant="danger" type="button" className="w-50 clear-main-btn" onClick={handleClearAll}>
                Clear
              </Button>
            </div>
          </Form>

          {answer && (
            <div className="answer-box spooky-glow">
              <h4>Answer</h4>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
