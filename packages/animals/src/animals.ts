export interface Animal {
  name: string;
  sound: string;
}

export const Lion: Animal = {
  name: 'Lion',
  sound: 'roar',
};

export const Eagle: Animal = {
  name: 'Eagle',
  sound: 'screech',
};

export const Goldfish: Animal = {
  name: 'Goldfish',
  sound: 'bubble',
};

export function createAnimalSound(animal: Animal): string {
  return `The ${animal.name} says ${animal.sound}`;
}
