import { SiWordpress, SiMysql, SiPhp, SiNodedotjs, SiPython, SiReact, SiDocker, SiGit } from "react-icons/si";

const technologies = [
  { icon: SiWordpress, name: "WordPress" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiReact, name: "React" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" }
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-tech-title">
            Built For Modern Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-tech-subtitle">
            One-click installation and full support for the tools you love
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-4 p-6 rounded-md hover-elevate"
              data-testid={`tech-item-${index}`}
            >
              <tech.icon className="w-12 h-12 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
