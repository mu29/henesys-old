import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPostActions } from 'modules/Post';
import { FormGroup, Input, IconButton } from 'components/Bootstrap';
import { Editor, Toolbar } from 'components/Editor';
import { findEnableMenu } from 'utils';

class PostForm extends Component {
  static propTypes = {
    createPost: PropTypes.func.isRequired,
    menu: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  };

  constructor() {
    super();
    this.state = {
      title: '',
      content: '',
    };
  }

  onChangeContent = content => this.setState({ ...this.state, content })

  onSubmit = () => {
    const { createPost, menu } = this.props;
    const { title, content } = this.state;

    if (title.length === 0 || content.length === 0) {
      return;
    }

    createPost(menu.id, title, content);
  }

  render() {
    const { menu } = this.props;
    const { title, content } = this.state;

    return (
      <div className="post-form">
        <FormGroup addon={ menu.name }>
          <Input
            value={ title }
            onChange={ ({ target }) => { this.setState({ ...this.state, title: target.value }); } }
            placeholder="제목을 입력해주세요"
          />
        </FormGroup>
        <Toolbar />
        <Editor onChange={ this.onChangeContent } html={ content } />
        <IconButton
          className="post-button"
          icon="plus"
          color="black"
          onClick={ this.onSubmit }
        >
          작성하기
        </IconButton>
        <style jsx>{`
          .post-form input {
            height: 3rem;
            padding: 1rem;
            border-top-right-radius: 0.25rem !important;
            border-bottom-right-radius: 0.25rem !important;
          }
          .post-button {
            margin-top: 1rem;
            float: right;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state, { tag }) => ({
  menu: findEnableMenu(tag),
});

const mapDispatchToProps = dispatch => ({
  createPost: (tag, title, content) => dispatch(createPostActions.request({ tag, title, content })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
