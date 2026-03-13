/*
  Warnings:

  - Added the required column `text` to the `about` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `about` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `about` ADD COLUMN `text` LONGTEXT NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
