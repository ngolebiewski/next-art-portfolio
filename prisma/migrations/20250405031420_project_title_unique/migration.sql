/*
  Warnings:

  - A unique constraint covering the columns `[projectTitle]` on the table `Tech` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tech_projectTitle_key" ON "Tech"("projectTitle");
