const ColorBox = (props) => {
    const { color } = props;

    return (
        <div style={{ width: "500px", 
                      height: "500px", 
                      backgroundColor: color,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",

                    }}> 
        </div>
    )
}

export default ColorBox;