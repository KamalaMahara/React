let CurrentTime = () => {
  let date = new Date();
  return (
    <p className="Lead fw-medium">
      This is the current time: {date.toLocaleDateString()}-
      {date.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
