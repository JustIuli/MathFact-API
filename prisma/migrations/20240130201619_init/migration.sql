-- CreateTable
CREATE TABLE "MathFact" (
    "id" SERIAL NOT NULL,
    "fact" TEXT NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "MathFact_pkey" PRIMARY KEY ("id")
);
