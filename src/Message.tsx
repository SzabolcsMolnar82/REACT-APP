function Message() {

    const name = 'A react app működik!';

    if (name)
        return <h1>Rendszerüzenet: {name}</h1>;
    return <h1>Hello world</h1>;

    
}

export default Message;