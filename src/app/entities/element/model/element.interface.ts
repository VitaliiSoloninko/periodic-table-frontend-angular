import { Category } from './category.interface';
import { Group } from './group.interface';
import { Period } from './period.interface';
import { State } from './state.interface';

export interface ChemicalElement {
  id: number;
  atomic_number: number;
  symbol: string;
  name: string;
  atomic_mass: string;
  boiling_point: string;
  melting_point: string;
  electronegativity: string;
  density: string;
  discovered_by: string;
  oxidation_states: string;
  createdAt: string;
  updatedAt: string;
  state: State;
  category: Category;
  group: Group | null;
  period: Period;
}
