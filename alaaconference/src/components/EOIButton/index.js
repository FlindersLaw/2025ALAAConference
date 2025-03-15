import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from'./EOIButton.modules.css'; // Importing the CSS file

export const EOIButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <a
        /* href="https://forms.office.com/Pages/ResponsePage.aspx?id=u30Vcr3o3ECNAD8IwjSsR5d-9ebgQuFCqx0MmfvIP1hUMjYzMFRUOFkyWU1OWDhTWDVXMVg0S0FTMC4u" */
        href='https://docassemble2.flinders.edu.au/interview?i=docassemble.2024ALAAConference:data/questions/eoi.yml'
        className={styles.interestButton}
        target='_blank'
        rel='noopener noreferrer'
      >
        Expression of Interest
      </a>
    </div>
  );
};

// URL to internal registration URL (not payment gateway)
export function RegisterButton(props) {
  // console.log("registerURL:", props.registerURL);
  // console.log("buttonText:", props.buttonText);
  // console.log("props:", props);
  // console.log("theURL:", theURL);
  let theURL = useBaseUrl(props.registerURL);
  return (
    <div className={styles.buttonContainer}>
      <a
        href={theURL}
        className={styles.registerButton}
      >
        {props.buttonText}
      </a>
    </div>
  )
}

// URL to a padlet where users can leave comments
export function LearnButton(props) {
  let theURL = useBaseUrl(props.learnURL);
  let buttonText = props.buttonText || 'What did you learn?';
  return (
    <div className={styles.learnButtonContainer}>
      <a
        href={theURL}
        className={styles.learnButton}
        target="_blank"
      >
        {buttonText}
      </a>
    </div>
  );
}

// URL to a padlet where users can leave comments
export function ProgramHeadingButton(props) {
  let theURL = useBaseUrl(props.URL);
  let buttonText = "Conference Padlet"
  return (
    <div className={styles.programHeadingButtonContainer}>
      <a
        href={theURL}
        className={styles.programHeadingButton}
      >
        {buttonText}
      </a>
    </div>
  );
}

export const CFPButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <a
        href='/call_for_papers'
        className={styles.registerButton}
        rel='noopener noreferrer'
      >
        Call for Papers
      </a>
    </div>
  );
};


export default EOIButton;
