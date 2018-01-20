import Menus from 'constants/Menu';

const findEnableMenu = (menus, tag) => {
  if (!menus) {
    return null;
  }

  const menu = menus.find(m => m.id === tag);
  return menu.enable ? menu : findEnableMenu(menu.tags, menu.tags[0].id);
};

export default tag => findEnableMenu(Menus, tag);
