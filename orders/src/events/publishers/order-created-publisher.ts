import { Publisher, OrderCreatedEvent, Subjects } from '@abltickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
