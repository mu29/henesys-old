import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditorTextArea extends Component {
  static propTypes = {
    html: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    html: '',
    onChange: null,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.html !== this.editor.innerHTML) {
      return true;
    }

    const optional = ['style', 'className'];
    return optional.some(name => this.props[name] !== nextProps[name]);
  }

  componentDidUpdate() {
    if (this.props.html !== this.editor.innerHTML) {
      this.editor.innerHTML = this.props.html;
    }
  }

  onChangeText = ({ target }) => {
    const html = target.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange(html);
    }
    this.lastHtml = html;
  }

  render() {
    /* eslint-disable */
    return (
      <div>
        <div
          className="editor"
          ref={ (editor) => { this.editor = editor; } }
          onInput={ this.onChangeText }
          onDoubleClick={ this.onDoubleClick }
          dangerouslySetInnerHTML={{ __html: this.props.html }}
          contentEditable
        />
        <style jsx>{`
          .editor {
            width: 100%;
            height: 30rem;
            padding: 1rem;
            border: 0.0625rem solid #E0E0E0;
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
            font-size: medium;
            font-family: 'Nanum Gothic';
            font-weight: 300;
            background-color: white;
          }
          .editor:active,
          .editor:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
    /* eslint-enable */
  }
}
