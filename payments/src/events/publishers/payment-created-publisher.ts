import { Subjects, Publisher, PaymentCreatedEvent } from '@abltickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
