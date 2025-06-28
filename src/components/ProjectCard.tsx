interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

export const ProjectCard = ({ title, description, image, url }: ProjectCardProps) => (
  <div className="bg-white/10 p-4 rounded-lg shadow-md">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-2" />
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
    {url && <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Project</a>}
  </div>
);