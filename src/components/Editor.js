import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
//import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function Editor(props) {
    const { language, displayName, value, onChange } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className="editor-container" id={language}>
            <div className="editor-title">{displayName}</div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrappings: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    );
}
