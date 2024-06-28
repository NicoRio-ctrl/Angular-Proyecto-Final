export interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  export interface Form {
    name: string;
    url: string;
  }
  
  export interface GameIndex {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  export interface HeldItem {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      version: {
        name: string;
        url: string;
      };
      rarity: number;
    }[];
  }
  
  export interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      version_group: {
        name: string;
        url: string;
      };
      move_learn_method: {
        name: string;
        url: string;
      };
    }[];
  }
  
  export interface Species {
    name: string;
    url: string;
  }
  
  export interface Sprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
      home: {
        front_default: string;
        front_female: string | null;
        front_shiny: string;
        front_shiny_female: string | null;
      };
      "official-artwork": {
        front_default: string;
      };
      showdown: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      [generation: string]: {
        [version: string]: {
          front_default: string;
          front_shiny: string;
          back_default: string;
          back_shiny: string;
        };
      };
    };
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  export interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  
  export interface Cries {
    latest: string;
    legacy: string;
  }
  
  export interface PokemonInterface {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }
  