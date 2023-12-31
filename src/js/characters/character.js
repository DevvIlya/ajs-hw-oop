export default class Character {
    static #availableTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Некорректное имя. Допустимая длина имени: от 2 до 10 символов.');
      }
      if (!Character.#availableTypes.includes(type)) {
        throw new Error('Некорректный тип персонажа.');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  
    static getAvailableTypes() {
      return Character.#availableTypes;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить уровень умершего персонажа.');
      }
  
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    }
  
    damage(points) {
      if (this.health === 0) {
        throw new Error('Нельзя нанести урон умершему персонажу.');
      }
  
      this.health -= points * (1 - this.defence / 100);
  
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }