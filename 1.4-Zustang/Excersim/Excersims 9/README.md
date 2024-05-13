# Documentación del Componente DnDCharacter

## Descripción

Este componente de React, llamado DnDCharacter, representa un personaje para el juego de rol Dungeons & Dragons (D&D). Incluye atributos como puntos de golpe (hitpoints) y habilidades como fuerza (strength), destreza (dexterity), constitución (constitution), inteligencia (intelligence), sabiduría (wisdom) y carisma (charisma).

## Interfaz CharacterState

La interfaz CharacterState especifica el estado del personaje, que incluye los siguientes atributos:

- hitpoints: Número de puntos de golpe del personaje.
- strength: Valor de la habilidad de fuerza del personaje.
- dexterity: Valor de la habilidad de destreza del personaje.
- constitution: Valor de la habilidad de constitución del personaje.
- intelligence: Valor de la habilidad de inteligencia del personaje.
- wisdom: Valor de la habilidad de sabiduría del personaje.
- charisma: Valor de la habilidad de carisma del personaje.

## Clase DnDCharacter

La clase DnDCharacter extiende la clase React.Component y representa al personaje de D&D. Inicializa el estado del personaje en el constructor con valores generados aleatoriamente para las habilidades y calcula los puntos de golpe basados en la constitución del personaje.

- Método generateAbilityScore(): Genera un valor de habilidad aleatorio. Actualmente, devuelve siempre 4 como un valor fijo para simplificar.
- Método getModifierFor(abilityValue: number): Calcula el modificador para una habilidad dada. El modificador se calcula como la diferencia entre el valor de habilidad y 10, dividido por 2 y redondeado hacia abajo.

## Renderizado

El método render() renderiza la interfaz de usuario del personaje, mostrando los puntos de golpe y las habilidades del personaje en elementos de párrafo.

## Exportación

El componente DnDCharacter se exporta para que pueda ser utilizado en otras partes de la aplicación.
