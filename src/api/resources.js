import client from './client';

export const getResources = params => {
  return client.get(params);
};
