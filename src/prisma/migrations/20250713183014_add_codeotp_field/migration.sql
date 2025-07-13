/*
  Warnings:

  - A unique constraint covering the columns `[CodeOtp]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `CodeOtp` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_CodeOtp_key` ON `users`(`CodeOtp`);
