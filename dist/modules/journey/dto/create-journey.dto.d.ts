import { CreateTripDto } from '../../trip/dto/create-trip.dto';
export declare class CreateJourneyDto {
    transport_id: number;
    trips: CreateTripDto[];
}
