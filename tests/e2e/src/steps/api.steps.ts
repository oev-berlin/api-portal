import expect from 'expect';
import { Given } from '@cucumber/cucumber';
import { AxiosResponse } from 'axios';
import { ICustomWorld } from '../support/custom-world';

// eslint-disable-next-line no-unused-vars
Given('A bored activity is recieved', async function (this: ICustomWorld) {
  const response: AxiosResponse | undefined = await this.server?.get(
    'activity'
  );
  expect(response).toBeDefined();
});
