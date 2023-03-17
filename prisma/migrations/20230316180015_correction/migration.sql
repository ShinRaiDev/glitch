/*
  Warnings:

  - You are about to drop the column `effeciency` on the `StudySession` table. All the data in the column will be lost.
  - Added the required column `efficiency` to the `StudySession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `StudySession` DROP COLUMN `effeciency`,
    ADD COLUMN `efficiency` INTEGER NOT NULL;
