// app/tech/TechProjects.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Technology {
  id: number;
  name: string;
}

interface TechProject {
  id: number;
  projectTitle: string;
  headline: string;
  imageUrl: string;
  role: string;
  gifUrl: string | null;
  description: string;
  date: string;
  githubUrl: string;
  deployedUrl: string;
  technologies: Technology[];
}

export default function TechProjects({ projects }: { projects: TechProject[] }) {
  const [selectedProject, setSelectedProject] = useState<TechProject | null>(null);

  if (!projects.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.imageUrl}
              alt={project.projectTitle}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-4">
              <h2 className="text-lg font-bold">{project.projectTitle}</h2>
              <p className="text-sm text-gray-500">{project.headline}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl p-8 tech-projects">
            <DialogHeader>
              <DialogTitle>{selectedProject.projectTitle}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.projectTitle}
              className="w-full h-64 object-cover rounded-lg mb-2"
            />

            <div className="my-2">
              <h3 className="text-sm font-bold">Role:</h3>
              <p className="text-sm text-gray-700">{selectedProject.role}</p>
            </div>

            <div className="my-2">
              <h3 className="text-sm font-bold">Technologies Used:</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.technologies?.map((tech) => (
                  <span
                    key={tech.id}
                    className="inline-block bg-blue-200 text-blue-800 text-xs py-1 px-3 rounded-full hover:bg-blue-300 cursor-pointer"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <a href={selectedProject.githubUrl} target="_blank" className="text-blue-500">
                GitHub
              </a>
              <a href={selectedProject.deployedUrl} target="_blank" className="text-blue-500">
                Live Demo
              </a>
            </div>

            <Button onClick={() => setSelectedProject(null)}>Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
