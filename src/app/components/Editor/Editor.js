import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menus from 'constants/Menu';
import { Input } from 'components/Bootstrap';
import EditorTextArea from './EditorTextArea';
import Toolbar from './Toolbar';

export default class Editor extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = { content: '' };
  }

  onChangeContent = content => this.setState({ ...this.state, content })

  render() {
    const findMenu = (menus, tag) => {
      if (!menus) {
        return null;
      }

      const menu = menus.find(m => m.id === tag);
      return menu || menus.map(m => findMenu(m.tags, tag)).find(Boolean);
    };
    const menu = findMenu(Menus, this.props.tag);

    return (
      <div className="editor">
        <div className="title-area">
          <h4>{ menu.name }</h4>
          <Input wrapperClassName="title-input" placeholder="제목을 입력해주세요" />
        </div>
        <Toolbar />
        <EditorTextArea onChange={ this.onChangeContent } html={ this.state.content } />
        <style jsx>{`
          .editor .title-area {
            display: flex;
            flex-direction: row;
            margin-bottom: 1rem;
          }
          .editor .title-area h4 {
            display: flex;
            align-items: center;
            height: 3rem;
            margin: 0;
            padding: 1rem;
            border: 1px solid #E7E7E7;
            border-right: none;
            border-top-left-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            background-color: #FAFAFA;
          }
          .editor .title-area .title-input {
            flex: 1;
          }
          .editor .title-area input {
            height: 3rem;
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
          }
        `}</style>
      </div>
    );
  }
}
