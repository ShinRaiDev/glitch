/*
  Warnings:

  - You are about to drop the `StudySession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `StudySession` DROP FOREIGN KEY `StudySession_userId_fkey`;

-- DropTable
DROP TABLE `StudySession`;
