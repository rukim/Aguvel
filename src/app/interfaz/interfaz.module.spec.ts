import { InterfazModule } from './interfaz.module';

describe('InterfazModule', () => {
  let interfazModule: InterfazModule;

  beforeEach(() => {
    interfazModule = new InterfazModule();
  });

  it('should create an instance', () => {
    expect(interfazModule).toBeTruthy();
  });
});
