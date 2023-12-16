/*
  Warnings:

  - A unique constraint covering the columns `[musclegroup_name]` on the table `musclegroups` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "musclegroups_musclegroup_name_key" ON "musclegroups"("musclegroup_name");
