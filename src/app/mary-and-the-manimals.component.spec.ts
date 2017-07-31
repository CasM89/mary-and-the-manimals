import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MaryAndTheManimalsAppComponent } from '../app/mary-and-the-manimals.component';

beforeEachProviders(() => [MaryAndTheManimalsAppComponent]);

describe('App: MaryAndTheManimals', () => {
  it('should create the app',
      inject([MaryAndTheManimalsAppComponent], (app: MaryAndTheManimalsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mary-and-the-manimals works!\'',
      inject([MaryAndTheManimalsAppComponent], (app: MaryAndTheManimalsAppComponent) => {
    expect(app.title).toEqual('mary-and-the-manimals works!');
  }));
});
