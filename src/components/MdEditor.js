import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function MdEditor() {
    const [value, setValue] = useState(
        '**Exercise - Centering a Div****Exercise - Centering a Div**'
    );
    return (
        <div className="md--container">
            <MDEditor value={value} onChange={setValue} />
            <MDEditor.Markdown source={value} />
        </div>
    );
}
