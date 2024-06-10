import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div>
            <div onClick={toggleAnswer} style={{ cursor: 'pointer' }}>
                <h3>{question}</h3>
            </div>
            {showAnswer && <p>{answer}</p>}
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
        // Add more FAQ items here
    ];

    return (
        <div>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQSection;