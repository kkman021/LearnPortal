import { useState } from 'react';
import styles from './styles.module.css';

export default function FeedbackWidget() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleSubmit = async (score) => {
    if (isSubmitted) {
      return false;
    }
    setIsSubmitted(true);

    const apiUri = "https://script.google.com/macros/s/AKfycbzEE4hq3RkgpduAU-ccvZpS2DnR6vue-BE883bMEFdI0N_j0k_lo949K0nJ132E6q7A/exec";

    const date = new Date()

    const data = {
      createTime: date,
      score: score,
      urlParameter: window.location.href,
      urlPath: window.location.pathname,
    };

    try {
      fetch(apiUri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        }
      });
      setFeedbackSuccess(true);
    } catch (error) {
      console.log('Error:', error);
      setIsSubmitted(false);
    }
  };

  // Function to render emoticon based on rating
  const renderEmoticon = (rating) => {
    switch(rating) {
      case 1:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" className={styles.emoticon}>
            <path 
              d="M36.3 2.5h-35a1.2 1.2 0 0 0-1 2.1L5 9.3v22A3.8 3.8 0 0 0 8.8 35h27.5a3.7 3.7 0 0 0 3.7-3.7v-25a3.8 3.8 0 0 0-3.7-3.8Z" 
              fill={"#FFC107"}
            />
            <path 
              d="M22.5 22.5a5 5 0 0 1 5 4A1.3 1.3 0 1 0 30 26a7.7 7.7 0 0 0-15 0 1.3 1.3 0 1 0 2.5.5c0-.2.9-4 5-4ZM16.3 18.1a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7ZM28.7 18.1a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7ZM32.4 8.2a1.3 1.3 0 0 0-1.7-.6l-5 2.5a1.3 1.3 0 1 0 1.1 2.3l5-2.5a1.3 1.3 0 0 0 .6-1.7ZM18.8 12.5a1.3 1.3 0 0 0 .5-2.4l-5-2.5a1.3 1.3 0 1 0-1.1 2.3l5 2.5.6.1Z" 
              fill="#000"
            />
          </svg>
        );
      case 2:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" className={styles.emoticon}>
            <path 
              d="M36.2 2.5h-35a1.3 1.3 0 0 0-.8 2.1L5 9.3v22A3.7 3.7 0 0 0 8.7 35h27.5a3.8 3.8 0 0 0 3.8-3.8v-25a3.8 3.8 0 0 0-3.8-3.7Z" 
              fill={"#FFC107"}
            />
            <path 
              d="M22.5 22.5a5 5 0 0 0-5 4A1.3 1.3 0 1 1 15 26a7.6 7.6 0 0 1 7.5-6 7.6 7.6 0 0 1 7.5 6 1.3 1.3 0 1 1-2.5.5c0-.2-.8-4-5-4ZM16.3 15.6a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7ZM28.8 15.6a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7Z" 
              fill="#000"
            />
          </svg>
        );
      case 3:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" className={styles.emoticon}>
            <path 
              d="M36.3 2.5h-35A1.3 1.3 0 0 0 0 4c0 .2.2.5.4.6L5 9.3v22A3.8 3.8 0 0 0 8.8 35h27.5a3.7 3.7 0 0 0 3.7-3.7v-25a3.7 3.7 0 0 0-3.7-3.8Zm-20 20h12.5a1.2 1.2 0 1 1 0 2.5H16.3a1.2 1.2 0 1 1 0-2.5Zm-2-8.7a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.7 0Zm14.5 1.8a1.9 1.9 0 1 1 0-3.7 1.9 1.9 0 0 1 0 3.7Z" 
              fill={"#FFC107"}
            />
            <path 
              d="M16.3 15.6a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7ZM28.7 15.6a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7ZM16.2 25h12.5a1.3 1.3 0 0 0 0-2.5H16.2a1.3 1.3 0 0 0 0 2.5Z" 
              fill="#000"
            />
          </svg>
        );
      case 4:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" className={styles.emoticon}>
            <path 
              d="M36.2 2.5h-35c-.5 0-1 .3-1 .8-.3.5-.2 1 .2 1.3L5 9.3v22c0 2 1.6 3.7 3.7 3.7h27.5c2.2 0 3.8-1.6 3.8-3.7v-25c0-2.2-1.6-3.8-3.8-3.8Z" 
              fill={"#FFC107"}
            />
            <path 
              d="M16 20c.6-.1 1.4.3 1.5 1a5 5 0 0 0 5 4 5 5 0 0 0 5-4c.1-.7.8-1.1 1.5-1 .8.1 1.1.8 1 1.5a7.6 7.6 0 0 1-9.1 5.9c-3-.6-5.3-3-5.9-5.9-.1-.6.3-1.4 1-1.5ZM16.3 15.6a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7ZM28.7 15.6a1.9 1.9 0 1 0 0-3.7 1.9 1.9 0 0 0 0 3.7Z" 
              fill="#000"
            />
          </svg>
        );
      case 5:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" className={styles.emoticon}>
            <path 
              d="M36.2 2.5h-35c-.5 0-1 .3-1 .8-.3.5-.2 1 .2 1.3L5 9.3v22c0 2 1.6 3.7 3.7 3.7h27.5c2.2 0 3.8-1.6 3.8-3.7v-25c0-2.2-1.6-3.8-3.8-3.8Z" 
              fill={"#FFC107"}
            />
            <path 
              d="M18.8 10.6c-1-.8-2.3-.8-3.2 0l-.6.7-.6-.7c-.9-.8-2.3-.8-3.1 0-1 .9-1 2.3 0 3.2l3.7 3.7 3.8-3.8c.8-.8.8-2.2 0-3ZM30.6 10.6l-.6.7-.6-.7c-.9-.8-2.3-.8-3.2 0-.8.9-.8 2.3 0 3.2l3.8 3.7 3.7-3.8c1-.8 1-2.2 0-3-.8-1-2.2-1-3 0ZM22.4 27.5c5 0 7.5-4.4 7.5-6 0-.4 0-.6-.3-1-.2-.4-.6-.5-1-.5H16.2c-.3 0-.7.1-1 .5-.2.4-.2.6-.2 1 0 1.6 2.5 6 7.4 6Z" 
              fill="#000"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.section}>
      {feedbackSuccess ? (
        <h2 className={styles.title}>Thanks for your feedback!</h2>
      ) : (
        <>
          <h2 className={styles.title}>Was this helpful?</h2>
          <div className={styles.feedback}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                className={styles.button}
                onClick={() => handleSubmit(rating)}
              >
                {renderEmoticon(rating)}
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}