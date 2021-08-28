import './../../css/code.css';
import CodeMirror from 'react-codemirror';
import './../../../node_modules/codemirror/lib/codemirror.css';
import './../../../node_modules/codemirror/theme/nord.css';
import './../../../node_modules/codemirror/mode/python/python.js';
import piston from 'piston-client';

async function run_lesson(code) {
  const client = piston({ server: 'https://emkc.org' });

  const result = await client.execute('python', code);
  console.log(result);
}

const Code = (props) => {
  return (
    <div class="code-box">
      <div className="code">
        <CodeMirror
          options={{
            value: props.code,
            mode: 'python',
            theme: 'nord',
            lineNumbers: true,
          }}
        />
      </div>

      <button id="run">Run</button>

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
    </div>
  );
};

export default Code;
