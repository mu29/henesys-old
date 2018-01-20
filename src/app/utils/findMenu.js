import Menus from 'constants/Menu';

const findMenu = (menus, tag) => {
  if (!menus) {
    return null;
  }

  const menu = menus.find(m => m.id === tag);
  return menu || menus.map(m => findMenu(m.tags, tag)).find(Boolean);
};

export default tag => findMenu(Menus, tag);
