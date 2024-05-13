import React from 'react';

interface CharacterState {
  hitpoints: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

class DnDCharacter extends React.Component<{}, CharacterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      strength: this.generateAbilityScore(),
      dexterity: this.generateAbilityScore(),
      constitution: this.generateAbilityScore(),
      intelligence: this.generateAbilityScore(),
      wisdom: this.generateAbilityScore(),
      charisma: this.generateAbilityScore(),
      hitpoints: 10 + this.getModifierFor(this.state.constitution),
    };
  }

  generateAbilityScore(): number {
    return 4;
  }

  getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  render() {
    const { hitpoints, strength, dexterity, constitution, intelligence, wisdom, charisma } = this.state;
    return (
      <div>
        <h1>D&D Character</h1>
        <p>Hitpoints: {hitpoints}</p>
        <p>Strength: {strength}</p>
        <p>Dexterity: {dexterity}</p>
        <p>Constitution: {constitution}</p>
        <p>Intelligence: {intelligence}</p>
        <p>Wisdom: {wisdom}</p>
        <p>Charisma: {charisma}</p>
      </div>
    );
  }
}

export default DnDCharacter;
