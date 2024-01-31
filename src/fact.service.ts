import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MathFact } from '@prisma/client';
@Injectable()
export class FactService {
  constructor(private prisma: PrismaService) {}

  async randomFact(): Promise<MathFact> {
    try {
      const totalFacts = await this.prisma.mathFact.count();

      const randomFactId = Math.floor(Math.random() * totalFacts) + 1;

      return await this.prisma.mathFact.findUnique({
        where: {
          id: randomFactId,
        },
      });
    } catch (e) {
      console.error('Error:', e.message);
      return null;
    }
  }
  async fact(id: string): Promise<MathFact | null> {
    try {
      const factId = parseInt(id, 10);

      if (isNaN(factId)) {
        throw new Error('Invalid ID. Please provide a valid integer ID.');
      }

      return await this.prisma.mathFact.findUnique({
        where: {
          id: factId,
        },
      });
    } catch (e) {
      console.error('Error:', e.message);
      return null;
    }
  }
  async getAllFacts(): Promise<MathFact[]> {
    try {
      return await this.prisma.mathFact.findMany();
    } catch (e) {
      console.error('Error:', e.message);
      return [];
    }
  }

  async getNumberOfFacts(): Promise<number> {
    try {
      return await this.prisma.mathFact.count();
    } catch (e) {
      console.error('Error:', e.message);
      return 0;
    }
  }
}
