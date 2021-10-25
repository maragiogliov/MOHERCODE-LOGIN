function Output({ srcDoc }) {
    return (
        <>
            
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
           
        </>
    );
}

export default Output;
