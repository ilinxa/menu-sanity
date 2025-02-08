export default {
    name: 'menuData',
    title: 'Menu Data',
    type: 'document',
    fields: [
      // { name: 'id', title: 'ID', type: 'number' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'string' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      { name: 'menuItems', title: 'Menu Items', type: 'array', of: [{ type: 'menuItem' }] },
    ],
  };