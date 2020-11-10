import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@abltickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
