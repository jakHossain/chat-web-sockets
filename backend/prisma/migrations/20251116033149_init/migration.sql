-- CreateEnum
CREATE TYPE "RelationshipStatus" AS ENUM ('PENDING', 'ACCEPTED', 'BLOCKED');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "userName" VARCHAR(14) NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "createdOn" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActive" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relationships" (
    "id" BIGSERIAL NOT NULL,
    "userId1" UUID,
    "userId2" UUID,
    "status" "RelationshipStatus" NOT NULL DEFAULT 'PENDING',
    "createdOn" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Relationships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatThreads" (
    "id" UUID NOT NULL,
    "createdOn" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" UUID,
    "name" VARCHAR(120) NOT NULL,

    CONSTRAINT "ChatThreads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" BIGSERIAL NOT NULL,
    "chatId" UUID NOT NULL,
    "senderId" UUID,
    "createdOn" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMembers" (
    "id" BIGSERIAL NOT NULL,
    "chatId" UUID NOT NULL,
    "userId" UUID,
    "joined" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMembers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE INDEX "Relationships_userId1_userId2_idx" ON "Relationships"("userId1", "userId2");

-- CreateIndex
CREATE UNIQUE INDEX "Relationships_userId1_userId2_key" ON "Relationships"("userId1", "userId2");

-- CreateIndex
CREATE INDEX "Messages_chatId_createdOn_idx" ON "Messages"("chatId", "createdOn");

-- CreateIndex
CREATE INDEX "ChatMembers_chatId_idx" ON "ChatMembers"("chatId");

-- AddForeignKey
ALTER TABLE "Relationships" ADD CONSTRAINT "Relationships_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationships" ADD CONSTRAINT "Relationships_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatThreads" ADD CONSTRAINT "ChatThreads_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "ChatThreads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMembers" ADD CONSTRAINT "ChatMembers_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "ChatThreads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMembers" ADD CONSTRAINT "ChatMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
