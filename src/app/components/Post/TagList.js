import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'components/Bootstrap';
import { findRootMenu } from 'utils';

export default class TagList extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  render() {
    const { tag } = this.props;
    const menu = findRootMenu(tag);
    const tags = menu.tags || [];

    return (
      <div className="tag-list">
        <ul>
          <li>
            <Link
              className={ menu.id === tag ? 'selected' : '' }
              href="posts"
              query={{ tag: menu.id }}
            >
              전체보기
            </Link>
          </li>
          {
            tags.map(t => (
              <li key={ t.id }>
                <Link
                  className={ t.id === tag ? 'selected' : '' }
                  href="posts"
                  query={{ tag: t.id }}
                >
                  { t.name }
                </Link>
              </li>
            ))
          }
        </ul>
        <style jsx>{`
          .tag-list {
            width: 14rem;
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
          .tag-list li .link {
            color: #616161;
            font-weight: 300;
            font-size: 1rem;
            text-decoration: none;
          }
          .tag-list li .selected {
            font-weight: 400;
          }
          .tag-list li .link:hover,
          .tag-list li .link:active,
          .tag-list li .link:focus {
            font-weight: 400;
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}
