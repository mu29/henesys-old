import Menus from 'constants/Menu';
import findMenu from './findMenu';
import findRootMenu from './findRootMenu';

const findEnableMenu = (menus, tag) => {
  if (!menus) {
    return null;
  }

  const menu = findRootMenu(tag);
  if (menu.id === tag) {
    return menu.tags[0];
  }

  return findMenu(tag);
};

export default tag => findEnableMenu(Menus, tag);
