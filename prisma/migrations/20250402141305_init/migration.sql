-- CreateEnum
CREATE TYPE "ArtworkType" AS ENUM ('NLBS', 'painting', 'film', 'art');

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('studio', 'instagram', 'tumblr');

-- CreateTable
CREATE TABLE "Artwork" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT,
    "etsyUrl" TEXT,
    "imageUrl" TEXT NOT NULL,
    "type" "ArtworkType" NOT NULL,
    "source" "SourceType" NOT NULL,
    "seriesId" INTEGER,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medium" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Medium_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tech" (
    "id" SERIAL NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "gifUrl" TEXT,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "deployedUrl" TEXT NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtworkMedium" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ArtworkMedium_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ArtworkTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ArtworkTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_TechTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TechTechnology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Series_name_key" ON "Series"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Medium_name_key" ON "Medium"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Technology_name_key" ON "Technology"("name");

-- CreateIndex
CREATE INDEX "_ArtworkMedium_B_index" ON "_ArtworkMedium"("B");

-- CreateIndex
CREATE INDEX "_ArtworkTag_B_index" ON "_ArtworkTag"("B");

-- CreateIndex
CREATE INDEX "_TechTechnology_B_index" ON "_TechTechnology"("B");

-- AddForeignKey
ALTER TABLE "Artwork" ADD CONSTRAINT "Artwork_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkMedium" ADD CONSTRAINT "_ArtworkMedium_A_fkey" FOREIGN KEY ("A") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkMedium" ADD CONSTRAINT "_ArtworkMedium_B_fkey" FOREIGN KEY ("B") REFERENCES "Medium"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkTag" ADD CONSTRAINT "_ArtworkTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Artwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtworkTag" ADD CONSTRAINT "_ArtworkTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TechTechnology" ADD CONSTRAINT "_TechTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Tech"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TechTechnology" ADD CONSTRAINT "_TechTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
