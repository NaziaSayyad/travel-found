export const Route = ({ data }) => {
    return (
      <div style={{
        backgroundColor: "#F0FCFF", // Light blue background
        padding: "10px 15px",
        border: "2px solid #00AEEF", // Border color similar to the image
        borderRadius: "5px",
        display: "inline-block",
        fontWeight: "bold",
        color: "black",
        textAlign : "left"
      }}>
        {data?.join(" - ")}
      </div>
    );
  };
  