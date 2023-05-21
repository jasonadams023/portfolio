interface ProjectSummaryProps {
  title: string;
  shortDescription: string;
  callback: () => void;
}

export default function ProjectSummary({ title, shortDescription, callback }: ProjectSummaryProps) {
  return (
    <li key={title}>
      <h3 onClick={callback}>{title}</h3>
      <p>{shortDescription}</p>
    </li>
  )
}
