import React from 'react';
import Menus from 'constants/Menu';

export default (props) => {
  const findRootMenu = (menus, tag, root) => {
    if (!menus)
      return null;
    const menu = menus.find(m => m.id === tag);
    return menu ?
      (root || menu) :
      menus.map(m => findRootMenu(m.tags, tag, root || m)).find(Boolean);
  }
  const menu = findRootMenu(Menus, props.tag);
  const tags = menu.tags || [];

  return (
    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 tag-list">
      <ul>
        {
          tags.map(tag => (
            <li key={ tag.id }>
              <a
                className={ tag.id === props.tag ? 'selected' : ''  }
                href={ `/posts?tag=${tag.id}` }
              >
                { tag.name }
              </a>
            </li>
          ))
        }
      </ul>
      <style jsx>{`
        .tag-list {
          flex: 1;
          padding: 0;
        }
        .tag-list ul {
          list-style: none;
          margin-top: 0;
          margin-bottom: 0;
          padding: 0;
          border-radius: 0.25rem;
          background-color: white;
        }
        .tag-list li {
          padding: 1rem;
          margin-left: 1rem;
          margin-right: 1rem;
          border-bottom: 0.015625rem solid #EEEEEE;
        }
        .tag-list li:last-child {
          border-bottom: none;
        }
        .tag-list li > a {
          color: #616161;
          font-weight: 300;
          font-size: 1rem;
          text-decoration: none;
        }
        .tag-list li .selected {
          font-weight: 400;
        }
        .tag-list li > a:hover,
        .tag-list li > a:active,
        .tag-list li > a:focus {
          font-weight: 400;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
