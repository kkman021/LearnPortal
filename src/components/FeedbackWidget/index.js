import { useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function FeedbackWidget() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [hovered, setHovered] = useState(0);

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

  const Star = ({ filled }) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={filled ? "var(--ifm-color-primary)" : "none"}
      stroke={filled ? "var(--ifm-color-primary)" : "#B0B0B0"}
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <polygon
        points="12,2 15,9 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,9"
      />
    </svg>
  );


  return (
    <section className={styles.section}>
      {feedbackSuccess ? (
        <h2 className={styles.title}>
          <Translate id="feedback.thanks" description="Message shown after feedback submission">
            Thanks for your feedback!
          </Translate>
        </h2>
      ) : (
        <>
          <h2 className={styles.title}>
            <Translate id="feedback.prompt" description="Prompt asking if the content is helpful">
              Is this helpful?
            </Translate>
          </h2>
          <div className={styles.feedback}>
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                type="button"
                className={styles.button}
                onMouseEnter={() => setHovered(score)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => handleSubmit(score)}
                aria-label={`rate ${score} start`}
              >
                <Star filled={score <= hovered} />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}