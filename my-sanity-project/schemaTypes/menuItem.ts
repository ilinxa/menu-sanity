export default {
    name: 'menuItem',
    title: 'Menu Item',
    type: 'document',
    fields: [
      // { name: 'id', title: 'ID', type: 'number' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'string' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'variants', title: 'Variants', type: 'array', of: [{ type: 'variantType' }] },
    ],
  };