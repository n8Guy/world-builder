import React, {useCallback, useState} from 'react';
import {Button, Form, Input} from "reactstrap";
import {useStickyState} from "../common";

export function App() {

    const [input, setInput] = useStickyState("", "test-input");

    const [testValue, setValue] = useState(input);

    return (
        <Form onSubmit={useCallback(() => setInput(testValue), [setInput, testValue])}>

            <Input value={testValue} onChange={(e) => setValue(e.currentTarget.value)}/>
            <Button type="submit" color="primary">test</Button>
        </Form>
    );
}
