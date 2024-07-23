export const ColoredMessage = (props) => {

    // 분할 대입
    const { color, children } = props; 

    console.log(color);

    const contentStyle = {
        color,
        fontSize: "20px"
    };

    

    return <p style={ contentStyle }>{children}</p>
}