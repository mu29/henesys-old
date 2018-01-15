import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menus from 'constants/Menu';
import { createPostActions } from 'modules/Post';
import { FormGroup, Input } from 'components/Bootstrap';
import EditorTextArea from './EditorTextArea';
import Toolbar from './Toolbar';

class Editor extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
    };
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
    const { title, content } = this.state;

    return (
      <div className="editor">
        <FormGroup addon={ menu.name }>
          <Input
            value={ title }
            onChange={ ({ target }) => { this.setState({ ...this.state, title: target.value }); } }
            placeholder="제목을 입력해주세요"
          />
        </FormGroup>
        <Toolbar />
        <EditorTextArea onChange={ this.onChangeContent } html={ content } />
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

const mapDispatchToProps = dispatch => ({
  createPost: (tag, title, content) => dispatch(createPostActions.request({ tag, title, content })),
});

export default connect(null, mapDispatchToProps)(Editor);
