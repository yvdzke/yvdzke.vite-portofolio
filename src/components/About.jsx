import React from "react";
import styles from "./styles/About.module.css";

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <h2>About Me</h2>
        <p>
          I'm <span>Yuda Pradana</span>, a passionate frontend developer who
          loves creating modern, clean, and interactive websites using React and
          Tailwind CSS.
        </p>
        <ul className="ul-tech">
          <li value="reply">
            <a className="a1" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
                class="icon"
              >
                <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z" />
              </svg>
              <span class="text">Framework</span>
            </a>
          </li>
          <li value="reply-all">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="M320-280 80-520l240-240 57 56-184 184 184 184-57 56Zm480 80v-160q0-50-35-85t-85-35H433l144 144-57 56-240-240 240-240 57 56-144 144h247q83 0 141.5 58.5T880-360v160h-80Z" />
              </svg>
              <span class="text">Reply all</span>
            </a>
          </li>
          <li value="forward">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m640-280-57-56 184-184-184-184 57-56 240 240-240 240ZM80-200v-160q0-83 58.5-141.5T280-560h247L383-704l57-56 240 240-240 240-57-56 144-144H280q-50 0-85 35t-35 85v160H80Z" />
              </svg>
              <span class="text">Forward</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutModal;
