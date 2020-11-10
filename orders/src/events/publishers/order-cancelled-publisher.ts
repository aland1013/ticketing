import { Subjects, Publisher, OrderCancelledEvent } from '@abltickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
