

const variantType = {
  name: 'variantType',
  title: 'Variant',
  type: 'object',
  fields: [
    { name: 'name', title: 'Variant Name', type: 'string' ,validation: (Rule: any) => Rule.required().error('The Variant Name is required') },
    { name: 'price', title: 'Price', type: 'number',validation: (Rule: any) => Rule.required().error('The price is required')  },
  ],
};

const menuItem = {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    // { name: 'id', title: 'ID', type: 'number' },
    { name: 'title', title: 'Title', type: 'string',validation: (Rule: any) => Rule.required().error('The title is required')  },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } ,validation: (Rule: any) => Rule.required().error('The image is required') },
    { name: 'price', title: 'Price', type: 'number',validation: (Rule: any) => Rule.required().error('The price is required')  },
    { name: 'variants', title: 'Variants', type: 'array', of: [{ type: 'variantType' }] },
  ],
};

const menuData = {
  name: 'menuData',
  title: 'Menu Data',
  type: 'document',
  fields: [
    { name: 'id', title: 'ID', type: 'number', },
    { name: 'title', title: 'Title', type: 'string',validation: (Rule: any) => Rule.required().error('The title is required')  },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule: any) => Rule.required().error('The image is required')  },
    { name: 'menuItems', title: 'Menu Items', type: 'array', of: [{ type: 'menuItem' }] },
  ],
};

export const schemaTypes = [menuData, menuItem, variantType];
