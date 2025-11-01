import React from "react";
import styles from "./styles/About.module.css";
import SkillsSection from "../components/SkillsSection.jsx";

function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <SkillsSection />
      </div>
    </div>
  );
}

export default AboutModal;
