import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    const [Another, setAnother] = React.useState('div')

    React.useEffect(() => {
        import('./another').then((module) => {
            setAnother(module.Another)
        })
    }, [])

    return (
        <>
            <h1>
                Hello World
            </h1>
            {Another}
        </>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));