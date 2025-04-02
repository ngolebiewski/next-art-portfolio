"use client";

import { useState, useEffect } from "react";
// import figlet from "figlet"; // eventually make the title with this.
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import Image from "next/image";

const TechPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("/api/tech-project")
      .then((res) => res.json())
      .then((data) => {
        console.log("tech projects: ", data);
        setProjects(data);
      });
  }, []);

  useEffect(() => {
    // Fetch technologies data
    fetch("/api/technology")
      .then((res) => res.json())
      .then((data) => {
        console.log("Technologies:", data); // Log the fetched technologies
        setTechnologies(data);
      });
  }, []);

  return (
    <div className="p-6 font-mono">
      {/* Project Cards */}
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

      {/* Dialog */}
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent
            className="max-w-5xl p-8"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
          >
            <DialogHeader>
              <DialogTitle id="dialog-title">
                {selectedProject.projectTitle}
              </DialogTitle>
            </DialogHeader>
            {/* Project Image */}
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.projectTitle}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* <Image
              src={project.imageUrl}
              alt={project.projectTitle}
              width={500} // Adjust width as needed
              height={192} // Adjust height as needed (48 * 4)
              className="w-full h-48 object-cover rounded-t-lg"
            /> */}

            {/* Project Description */}
            <p className="text-sm text-gray-700 my-4" id="dialog-description">
              {selectedProject.description}
            </p>

            {/* Debugging: Log the selected project's technologies */}
            {/* <div className="my-4">
              <h3 className="text-sm font-bold">
                Selected Project Technologies:
              </h3>
              <pre>{JSON.stringify(selectedProject.technologies, null, 2)}</pre>
            </div> */}

            {/* Technologies Used (Filtered by selected project) */}
            <div className="my-4">
              <h3 className="text-sm font-bold">Technologies Used:</h3>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.technologies?.map((tech) => {
                  // You could conditionally style based on the tech name or category
                  return (
                    <span
                      key={tech.id}
                      className="inline-block bg-blue-200 text-blue-800 text-xs py-1 px-3 rounded-full hover:bg-blue-300 cursor-pointer transition duration-200"
                    >
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* GitHub and Live Demo Links */}
            <div className="flex justify-between mt-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                GitHub
              </a>
              <a
                href={selectedProject.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Live Demo
              </a>
            </div>

            {/* Close Button */}
            <Button onClick={() => setSelectedProject(null)}>Close</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default TechPage;
