import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div>
        <div className={styles.loadingContainer}>
          <LoadingCircle />
        </div>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

function LoadingCircle() {
  return (
    <div className={styles.loadingContent} data-cy="loading-circle">
      <img
        src="/icons/loading-circle.svg"
        alt="Loading circle"
        className={styles.spin}
      />
    </div>
  );
}
