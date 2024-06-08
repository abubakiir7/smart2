import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TripService } from "./trip.service";
import { CreateTripDto } from "./dto/create-trip.dto";
import { UpdateTripDto } from "./dto/update-trip.dto";
import { FindTripDto } from "./dto/find-trip.dto";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("trip")
@Controller("trip")
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  create(@Body() createTripDto: CreateTripDto) {
    return this.tripService.create(createTripDto);
  }

  @Get()
  findAll() {
    return this.tripService.findAll();
  }

  @Get("finding-all-not-begun-routes")
  findAllNotBeginRoutes() {
    return this.tripService.findAllNotBeginRoutes();
  }

  @Get("finding-active-routes")
  findTripsInActive() {
    return this.tripService.findTripsInActive();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tripService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTripDto: UpdateTripDto) {
    return this.tripService.update(+id, updateTripDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tripService.remove(+id);
  }

  @Post("find-trip")
  @ApiOperation({ summary: "Finding all available routes" })
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        from: { type: "string", example: "1" },
        to: { type: "string", example: "2" },
        departing: { type: "string", format: "date", example: "" },
        return: { type: "string", format: "date", example: "" },
        passengers: { type: "integer", example: 1 },
      },
      required: ["from", "to", "passengers"],
    },
  })
  findTrip(@Body() findTripDto: FindTripDto, res) {
    return this.tripService.findTrip(findTripDto);
  }
}
