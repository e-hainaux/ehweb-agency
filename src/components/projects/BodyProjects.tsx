import React, { useState } from "react";
import styles from "@/styles/projects/BodyProjects.module.css";
import Splitter from "../Splitter";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ProjectModalContent from "./ProjectModalContent";
import { projects, Project } from "@/app/data/projectsData";

interface BodyProjectsProps {
  isLoading: boolean;
}

const BodyProjects: React.FC<BodyProjectsProps> = ({ isLoading }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  if (isLoading) {
    return <div className={styles.placeholder} />;
  }

  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.title}>Réalisations</h2>
      <Splitter />
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            onClick={() => openModal(project)}
          />
        ))}
      </div>

      <ProjectModal isOpen={modalOpen} onClose={closeModal}>
        {selectedProject && (
          <ProjectModalContent
            title={selectedProject.title}
            fullDescription={selectedProject.fullDescription}
            imageUrl={selectedProject.imageUrl}
            technologies={selectedProject.technologies}
            githubLink={selectedProject.githubLink}
            liveLink={selectedProject.liveLink}
          />
        )}
      </ProjectModal>
    </section>
  );
};

export default BodyProjects;
