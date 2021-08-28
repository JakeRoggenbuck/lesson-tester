import './../../css/code.css';
import CodeMirror from 'react-codemirror';
import './../../../node_modules/codemirror/lib/codemirror.css';
import './../../../node_modules/codemirror/theme/nord.css';
import './../../../node_modules/codemirror/mode/python/python.js';
import piston from 'piston-client';
import React, { useState, Component, useEffect } from 'react';

function run_lesson(code) {
  console.log(code);
  const client = piston({ server: 'https://emkc.org' });

  const result = client.execute('python', code);
  console.log(result);
  return result;
}

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runCode: false,
      code: 'print("Hello Nala!")',
      result: null,
    };
  }

  runCode = () => {
    this.setState({ runCode: true });
  };

  renderCode = async () => {
    try {
      const res = await run_lesson(this.code);

      this.setState({
        Code: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div class="code-box">
        <CodeMirror
          value={this.state.code}
          options={{
            mode: 'python',
            lineNumbers: true,
            theme: 'nord',
          }}
          onChange={(editor, data, value) => {
            this.setState({
              runCode: false,
              outputText: value,
            });
          }}
        />
        <button id="run" onClick={this.runCode}>
          Run
        </button>

        <select id="lesson-select">
          <option value="lesson_1">Lesson 1</option>
          <option value="lesson_2">Lesson 2</option>
          <option value="lesson_3">Lesson 3</option>
          <option value="lesson_4">Lesson 4</option>
          <option value="lesson_5">Lesson 5</option>
          <option value="lesson_6">Lesson 6</option>
          <option value="lesson_7">Lesson 7</option>
          <option value="lesson_8">Lesson 8</option>
        </select>

        <div className="Output">
          <pre>{this.state.runCode && this.state.Code}</pre>
        </div>
      </div>
    );
  }
}
