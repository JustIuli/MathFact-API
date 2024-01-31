import { Controller, Get, Param } from '@nestjs/common';
import { FactService } from './fact.service';
import { MathFact as FactModel } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MathFactResponse } from './dto/math.fact.response.dto';
@Controller()
@ApiTags('facts')
export class AppController {
  constructor(private readonly factService: FactService) {}

  /**
   * @summary Get a random fact
   * @response 200 - Returns a random fact
   * @responseContent {FactModel} 200.application/json - Random fact example
   * @example
   * {
   *   "id": 1,
   *   "fact": "Some cool fact that will be returned!",
   *   "source": "https://www.google.com"
   * }
   */
  @ApiOperation({ summary: 'Get a random math fact' })
  @ApiResponse({
    status: 200,
    description: 'Returns a random math fact',
    type: MathFactResponse,
    isArray: false,
  })
  @Get('/random')
  async getRandomFact(): Promise<FactModel> {
    return this.factService.randomFact();
  }

  /**
   * @summary Get a math fact based on the provided id
   * @response 200 - Returns a math fact
   * @responseContent {FactModel} 200.application/json - math fact example
   * @example
   * {
   *   "id": 1,
   *   "fact": "Some cool fact that will be returned!",
   *   "source": "https://www.google.com"
   * }
   */
  @ApiOperation({ summary: 'Get a math fact based on a provided ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns a math fact based on the provided id',
    type: MathFactResponse,
    isArray: false,
  })
  @Get('/id/:id')
  async getFactById(@Param('id') id: string): Promise<FactModel> {
    return this.factService.fact(id);
  }

  /**
   * @summary Get all math facts
   * @response 200 - Returns all math facts
   * @responseContent {MathFactResponse[]} 200.application/json - All math facts example
   * @example
   * [
   *   {
   *     "id": 1,
   *     "fact": "Fact 1",
   *     "source": "https://www.example.com/1"
   *   },
   *   {
   *     "id": 2,
   *     "fact": "Fact 2",
   *     "source": "https://www.example.com/2"
   *   }
   * ]
   */
  @ApiOperation({ summary: 'Get all math facts' })
  @ApiResponse({
    status: 200,
    description: 'Returns all math facts',
    type: MathFactResponse,
    isArray: true,
  })
  @Get('/all')
  async getAllFacts(): Promise<FactModel[]> {
    return this.factService.getAllFacts();
  }

  /**
   * @summary Get the number of math facts
   * @response 200 - Returns the number of math facts
   * @responseContent {number} 200.application/json - Number of math facts example
   * @example
   * 10
   */
  @ApiOperation({ summary: 'Get the number of math facts available' })
  @ApiResponse({
    status: 200,
    description: 'Returns the number of math facts available',
    type: Number,
  })
  @Get('/count')
  async getNumberOfFacts(): Promise<number> {
    return this.factService.getNumberOfFacts();
  }
}
