import './../../css/code.css';
import CodeMirror from 'react-codemirror';
import './../../../node_modules/codemirror/lib/codemirror.css';
import './../../../node_modules/codemirror/theme/nord.css';
import './../../../node_modules/codemirror/mode/python/python.js';
import piston from 'piston-client';
import React, { useState, Component, useEffect } from 'react';

const lesson_one =
  '\
assert isinstance(int_team_number, int)\n\
assert isinstance(str_team_name, str)\n\
assert isinstance(str_location, str)\n\
assert isinstance(int_rookie_year, int)\n\
assert isinstance(bool_is_active, bool)\n\
';

const LESSONS = [lesson_one];

async function run_lesson(code, lesson) {
  code += '\n' + LESSONS[lesson - 1];

  const client = piston({ server: 'https://emkc.org' });
  return await client.execute('python', code);
}

export default class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'print("Hello Nala!")',
      result: null,
      run: false,
      lesson: -1,
    };
  }

  renderResult = async () => {
    try {
      // Set the result to the output of the api running the code
      this.setState({
        result: await run_lesson(this.state.code, this.state.lesson),
      });

      // Save in state that the code has been ran
      this.setState({ run: true });
    } catch (err) {
      console.log(err);
    }
  };

  show_error = () => {
    if (this.state.result.run.code == 0) {
      return 'Looks like it worked!' + this.state.result.run.output;
    } else {
      return this.state.result.run.stderr;
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
          // Update the values of the code and run state
          onChange={(value) => {
            this.setState({
              run: false,
              code: value,
            });
          }}
        />

        <button
          id="run"
          onClick={() => {
            this.renderResult();
          }}
        >
          Run
        </button>

        <select
          onChange={(value) => {
            this.setState({
              lesson: value,
            });
            console.log(value);
          }}
          id="lesson-select"
        >
          <option value="1">Lesson 1</option>
          <option value="2">Lesson 2</option>
          <option value="3">Lesson 3</option>
          <option value="4">Lesson 4</option>
          <option value="5">Lesson 5</option>
          <option value="6">Lesson 6</option>
          <option value="7">Lesson 7</option>
          <option value="8">Lesson 8</option>
        </select>

        <div className="Output">
          <p>{this.state.run && this.show_error()}</p>
        </div>
      </div>
    );
  }
}
