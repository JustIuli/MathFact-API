import { ApiProperty } from '@nestjs/swagger';

export class MathFactResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  fact: string;

  @ApiProperty()
  source: string;
}
