export interface Animal {
  name: string;
  sound: string;
}

export const Lion: Animal = {
  name: "Lion",
  sound: "roar",
};

export const Eagle: Animal = {
  name: "Eagle",
  sound: "screech",
};

export const Goldfish: Animal = {
  name: "Goldfish",
  sound: "bubble",
};

export const Dog: Animal = {
  name: "Dog",
  sound: "woof",
};

export const Snake: Animal = {
  name: "Snake",
  sound: "hiss",
};

export function createAnimalSound(animal: Animal): string {
  return `The ${animal.name} says ${animal.sound}`;
}
