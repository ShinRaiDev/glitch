-- CreateTable
CREATE TABLE `StudySession` (
    `id` VARCHAR(191) NOT NULL,
    `time` INTEGER NOT NULL,
    `efficiency` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `StudySession_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StudySession` ADD CONSTRAINT `StudySession_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
