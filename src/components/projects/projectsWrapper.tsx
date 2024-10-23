import React, { useState } from "react";
import styles from "@/styles/projects/projectsWrapper.module.css";
import Splitter from "../Splitter";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import ProjectModalContent from "../projects/ProjectModalContent";
import { projects, Project } from "@/app/data/projectsData";

interface ProjectsWrapperProps {
  isLoading: boolean;
}

const ProjectsWrapper: React.FC<ProjectsWrapperProps> = ({ isLoading }) => {
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
      <span className={styles.title}>Réalisations</span>
      <Splitter />
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <>
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              onClick={() => openModal(project)}
            />
          </>
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

export default ProjectsWrapper;
