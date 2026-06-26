export interface CharacterAction {
  type: 'dialogue' | 'event';
  characterId: string;
  text?: string;
  animation?: 'jump' | 'shake' | 'scale';
  audioUrl?: string;
}

export interface SceneCharacter {
  id: string;
  // Añadimos la opción de diferenciar entre imagen o componente
  renderType: 'image' | 'component'; 
  src?: string; // Solo si es 'image'
  componentId?: 'Earth' | 'Sun'; // Solo si es 'component'
  positionClass: string;
}

export interface Scene {
  id: string;
  backgroundUrl?: string;
  backgroundClass?: string;
  characters: SceneCharacter[];
  actions: CharacterAction[];
}

export interface Lesson {
  id: string;
  title: string;
  scenes: Scene[];
}