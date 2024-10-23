import React from "react";
import styles from "@/styles/projects/ProjectModal.module.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.scrollableView}>{children}</div>
      </div>
    </div>
  );
};

export default ProjectModal;
