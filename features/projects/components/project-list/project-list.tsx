import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import Image from "next/image";
import { Button } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return <AlertBox message={error.message} />;
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

const AlertBox = ({ message }: { message: string }) => {
  return (
    <div className={styles.alertBoxContainer}>
      <div className={styles.alertBoxContent}>
        <Image
          src="/icons/alert-circle.svg"
          alt="error"
          width={20}
          height={20}
          flex-shrink={0}
        />
        <div className={styles.alertBoxText}>Error: {message}</div>
        <div className={styles.alertAction}>
          <Button
            className={styles.alertButton}
            onClick={() => window.location.reload()}
            data-cy="reload-button"
          >
            <div className={styles.alertButtonText}>Try again</div>
            <Image
              src="/icons/arrow-right.svg"
              alt="close"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
