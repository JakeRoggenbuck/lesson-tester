import { CopyBlock, dracula } from 'react-code-blocks';
import './../../css/code.css';

const Code = (props) => {
  return (
    <div class="code-box">
      <div className="code">
        <CopyBlock
          text={props.code}
          language={'python'}
          showLineNumbers={true}
          theme={dracula}
          wrapLines
        />
      </div>
    </div>
  );
};

export default Code;
