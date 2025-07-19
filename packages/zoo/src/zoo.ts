import { Animal, createAnimalSound } from '@mynameisiain/animals';

export class Zoo {
  private animals: Animal[] = [];

  constructor(animals: Animal[]) {
    this.animals = animals;
  }

  getAnimalSounds(): string[] {
    return this.animals.map(animal => createAnimalSound(animal));
  }
}
