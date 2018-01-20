import Menus from 'constants/Menu';

const findRootMenu = (menus, tag, root) => {
  if (!menus) {
    return null;
  }
  const menu = menus.find(m => m.id === tag);
  return menu ?
    (root || menu) :
    menus.map(m => findRootMenu(m.tags, tag, root || m)).find(Boolean);
};

export default tag => findRootMenu(Menus, tag);
