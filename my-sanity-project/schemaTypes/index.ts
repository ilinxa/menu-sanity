import { defineConfig } from 'sanity';
import menuData from './menuData';
import menuItem from './menuItem';
import { schemaTypes } from './menuSchemas';
import variantType from './variantType';

// export const schemaTypes = [menuData, menuItem, variantType];
export { schemaTypes } from './menuSchemas';
