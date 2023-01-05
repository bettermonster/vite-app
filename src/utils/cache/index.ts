import { CreateStorageParams, createStorge } from './storageCache';

function createOptions(storage: Storage): CreateStorageParams {
  return {
    storage,
  };
}

const createStorages = (storage: Storage) => {
  return createStorge(createOptions(storage));
};

export const createSessionStorage = () => {
  return createStorages(sessionStorage);
};
