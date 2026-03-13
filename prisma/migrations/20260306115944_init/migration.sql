-- CreateTable
CREATE TABLE `About` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AboutHighlight` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aboutId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AboutHighlight` ADD CONSTRAINT `AboutHighlight_aboutId_fkey` FOREIGN KEY (`aboutId`) REFERENCES `About`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
