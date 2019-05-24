import { OffersModule } from './offers.module';

describe('OffersModule', () => {
  let offersModule: OffersModule;

  beforeEach(() => {
    offersModule = new OffersModule();
  });

  it('should create an instance', () => {
    expect(offersModule).toBeTruthy();
  });
});
