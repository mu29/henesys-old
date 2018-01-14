import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menus from 'constants/Menu';
import { FormGroup, Input } from 'components/Bootstrap';
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
        <FormGroup addon={ menu.name }>
          <Input wrapperClassName="title-input" placeholder="제목을 입력해주세요" />
        </FormGroup>
        <Toolbar />
        <EditorTextArea onChange={ this.onChangeContent } html={ this.state.content } />
        <style jsx>{`
          .editor input {
            height: 3rem;
            padding: 1rem;
            border-top-right-radius: 0.25rem !important;
            border-bottom-right-radius: 0.25rem !important;
          }
        `}</style>
      </div>
    );
  }
}
